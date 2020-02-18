var express = require('express');
var mysql = require('mysql');
var app = express();
const path = require("path");
const multer = require("multer");
const port = 3001 

// Code to enable CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

 module.exports = app;

 // Database connection configurations
 var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventorysystem'
});

// Connect to Database
dbConn.connect(); 

app.get('/listproducts', function (req, res) {
    //console.log('in list products');    
    
    var listproductssql = "select * from products";

    dbConn.query(listproductssql, function (err, result) {
        if (err) throw err;
        console.log("products fetched");
        res.send(result);
    });
    

});



// Adding New Products in inventory system  
app.post('/createproduct', function (req, res) {
    let productnameval = req.body.productname;
    let categoryval = req.body.categoryname;
    let supplierval = req.body.suppliername;
    let cost_priceval = req.body.costpricename;
    let priceval = req.body.pricename;
    let unitval = req.body.unitname;
    let resdata = '';
    
    var createproductsql = "INSERT INTO products (name,category,supplier_name,cost_price,price,unit) VALUES ('"+productnameval+"','"+categoryval+"','"+supplierval+"','"+cost_priceval+"','"+priceval+"','"+unitval+"')";

    dbConn.query(createproductsql, function (err, result) {
        if (err) throw err;
        console.log("product created");
        //console.log(result.insertId);
        return res.json({ lastinsertid: result.insertId })       
    });
    
});

app.post('/upload', function (req, res) {
    console.log('in upload function');

    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        console.log("Last Insert Id ---", req.body.lastinsertid);
        /*Now do where ever you want to do*/
        
            
            let imageuploadpath = '/uploads/'+req.file.filename;

           let updateproductsql = "UPDATE products SET image_path='"+imageuploadpath+"' where id="+req.body.lastinsertid;

           console.log(updateproductsql);

           
           dbConn.query(updateproductsql, function (err, result) {
               if (err) throw err;
               console.log("Table Row Updated with Image Path");
                  
           });
           
          if(!err)
          return res.sendStatus(200).end();
     });

});

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
       
 });

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");