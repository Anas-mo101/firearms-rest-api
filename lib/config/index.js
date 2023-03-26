module.exports = {
  http: {
    host: process.env.HTTP_HOST || '127.0.0.1',
    port: process.env.HTTP_PORT || 3000,
  },
  mongo: {
    uri: process.env.MONGO_URI || 'admin:admin@mongo:27017',
    database: process.env.MONGO_DATABASE || 'firearmsdb',
    replicaSet: process.env.MONGO_REPLICA_SET || ''
  }
};
