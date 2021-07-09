var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});
router.get('/alumnos', async (req, res) => {
  const data = await studentDb.getAll();
  console.log("datas",data);
  res.render('index', { title: 'Express' });
});

module.exports = router;
