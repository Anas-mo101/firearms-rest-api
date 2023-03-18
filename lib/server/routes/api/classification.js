const db = require('../../../db');

// parameters
// - page
// - limit
// - search
// - classification
// - orderby

module.exports = (router) => {

  router.get('/classification', async (req, res) => {
    try{
      let page = req.query.page ?? 0;
      let limit = req.query.limit ?? 20;
      let search = req.query.search ?? '';
      let orderby = req.query.orderby == 'asc' ? 'asc' : 'desc';

      const pageOptions = {
        page: parseInt(page, 10) || 0,
        limit: parseInt(limit, 10) || 20
      }

      const classification = await db.getModel('Classification').find({})
      .skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit);

      //{ name: search }, .sort({ name: orderby });

      return res.send(classification);
    } catch (err) {
        return res.status(500).send();
    }
  });

  router.get('/classification/:id', async (req, res) => {
    try {
      const collections = await db.getModel('Classification').findById(req.params.id);

      if (!collections) {
        return res.status(400).send({
          'status': 'No collections found'
        });
      }

      return res.send(collections);
    } catch (err) {
        return res.status(500).send();
    }
  });

  router.post('/classification', async (req, res) => {
    try {
      const newFirearm = await db.getModel('Classification').create(req.body);
      return res.status(201).send(newFirearm);
    } catch (err) {
      return res.status(500).send();
    }
  });

  router.put('/classification/:id', async (req, res) => {
    try {
      const updatedFirearm = await db.getModel('Classification').findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedFirearm) {
        return res.status(400).send({
          'status': 'No collections found'
        });
      }
      return res.send(updatedFirearm);
    } catch (err) {
      return res.status(500).send();
    }
  });

  router.delete('/classification/:id', async (req, res) => {
    try {
      const deletedFirearm = await db.getModel('Classification').findByIdAndDelete(req.params.id);
      if (!deletedFirearm) {
        return res.status(400).send({
          'status': 'No collections found'
        });
      }
      return res.send(deletedFirearm);
    } catch (err) {
      return res.status(500).send();
    }
  });

};
