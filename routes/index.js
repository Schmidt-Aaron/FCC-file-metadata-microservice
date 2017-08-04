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
   console.log("test");

  
	// res.status(204).end()
	
	if( req.file ){
		console.log(req.file);
		return res.end('thanks for the file')
	}
	res.end('where is the file Lebowski!')
})

// router.post('/',  function(req, res, next) {
//   var upload = multer({
// 		storage: storage,
// 		// fileFilter: function(req, file, callback) {
// 		// 	var ext = path.extname(file.originalname)
// 		// 	if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
// 		// 		return callback(res.end('Only images are allowed'), null)
// 		// 	}
// 		// 	callback(null, true)
// 		// }
// 	}).single('theFile');
// 	upload(req, res, function(err) {
// 		res.end('File is uploaded')
// 	})

//})


module.exports = router;
