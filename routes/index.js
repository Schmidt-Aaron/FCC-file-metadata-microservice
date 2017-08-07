var express = require('express');
var multer = require('multer');
var uploads = multer({ dest: './uploads/'});

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Metadata Microservice' });
});

/* POST file uploads */
router.post('/', uploads.single('theFile'), function(req, res, next) {
  // console.log(req.body);
   

  
	// res.status(204).end()
	
	if( req.file ){
		console.log(req.file);
		alert(req.file.size)
		return res.end('thanks for the file')
	}
	res.end('where is the file Lebowski!')
})


module.exports = router;
