const mongoose = require('mongoose');
const mongooseAutoIncrement = require('mongoose-auto-increment');

const adminsSchema = require('./schemas/admins');
const classificationSchema = require('./schemas/classifications');
const firearmsSchema = require('./schemas/firearms');
const usersSchema = require('./schemas/users');

const logger = require('../logger');
const ERRORS = require('../constants/errors');

const models = {};

/**
 * Creates the DB abstraction layer for communicating with MongoDB and initiates the connection.
 *
 * @method connect
 * @param {Object} config Configuration object with structure:
 *
 *  {
 *    host: <String> The target MongoDB host to use.
 *    port: <Number> The target MongoDB port to use.
 *    database: <String> The target MongoDB database name to use.
 *    replicaSet: <String> The target MongoDB replica set name to use.
 *  }
 * @returns {Boolean} True if it succeeds.
 */
async function connect(config) {
  const log = logger.getInstance();
  let uri = `mongodb://${config.uri}/${config.database}?authSource=admin`;
  // let uri = `mongodb://admin:admin@localhost:27017/firearmsdb?authSource=admin`; 

  if (config.replicaSet !== '') {
    uri = uri + `?replicaSet=${config.replicaSet}`;
  }

  try {
    await mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );
  } catch (error) {
    log.error('Initial DB connection error: ', {
      errorCode: ERRORS.DB.INTERNAL_ERROR,
      error: error
    });
  }

  log.info('MongoDB database connection created successfully');
  const connection = mongoose.connection;

  connection
    .on('all', () => {
      log.info(`Connected to all nodes of the replica set ${uri}`);
    })
    .on('error', (error) => {
      logger.error('General DB connection error: ', {
        errorCode: ERRORS.DB.INTERNAL_ERROR,
        error: error
      });
    })
    .on('disconnected', () => {
      log.error('DB disconnected.', {
        errorCode: ERRORS.DB.CONNECTION_ERROR
      });
    });

  mountModels(connection);

  return true;
}

/**
 * Mounts the available Mongoose ODM models and wraps them in a custom object for easier access.
 *
 * @function mountModels
 * @param {Object} connection
 * @returns {Boolean} True once all the models have been mounted.
 */
function mountModels(connection) {
  mongooseAutoIncrement.initialize(connection);

  firearmsSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Firearm', startAt: 1 });
  classificationSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Classification', startAt: 1 });
  adminsSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Admin', startAt: 1 });
  usersSchema.plugin(mongooseAutoIncrement.plugin, { model: 'User', startAt: 1 });

  models.Firearm = connection.model('Firearm', firearmsSchema);
  models.Classification = connection.model('Classification', classificationSchema);
  models.Admin = connection.model('Admin', adminsSchema);
  models.User = connection.model('User', usersSchema);

  return true;
}

/**
 * @function getModel
 * @param {String} modelName
 * @returns {Object}
 */
function getModel(modelName) {
  return models[modelName];
}

module.exports = {
  connect,
  getModel
};
