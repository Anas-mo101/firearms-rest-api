const db = require('../../../db');
const { validateCall } = require('../../auth');
 

// parameters
// - page
// - limit
// - search
// - classification
// - orderby

module.exports = (router) => {

  router.get('/firearms', validateCall, async (req, res) => {
    try {
      let page = req.query.page ?? 0;
      let limit = req.query.limit ?? 20;
      let search = req.query.search;
      let classification = req.query.classification;
      let orderby = req.query.orderby;

      let queryobj = {};
      let sortobj = {};

      if(search !== null && search !== undefined){
        queryobj['name'] = search;
      }

      if(classification !== null && classification !== undefined){
        queryobj['classification'] = classification;
      }

      if(orderby !== null && orderby !== undefined){
        sortobj['name'] = orderby;
      }

      const pageOptions = {
        page: parseInt(page, 10) || 0,
        limit: parseInt(limit, 10) || 10
      }

      const firearms = await db.getModel('Firearm').find(queryobj)
      .skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).sort(sortobj); 
      

      return res.send(firearms);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  router.get('/firearms/:id', validateCall, async (req, res) => {
    try {
      const firearms = await db.getModel('Firearm').findById(req.params.id);

      if (!firearms) {
        return res.status(400).send({
          'status': 'No firearm found'
        });
      }
  
      return res.send(firearms);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  router.post('/firearms', async (req, res) => {
    try {
      const newFirearm = await db.getModel('Firearm').create(req.body);
      return res.status(201).send(newFirearm);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  router.put('/firearms/:id', async (req, res) => {
    try {
      const updatedFirearm = await db.getModel('Firearm').findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedFirearm) {
        return res.status(400).send({
          'status': 'No firearm found'
        });
      }
      return res.send(updatedFirearm);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  router.delete('/firearms/:id', async (req, res) => {
    try {
      const deletedFirearm = await db.getModel('Firearm').findByIdAndDelete(req.params.id);
      if (!deletedFirearm) {
        return res.status(400).send({
          'status': 'No firearm found'
        });
      }
      return res.send(deletedFirearm);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

};
