var express = require('express');
var mysql = require('mysql');
var app = express();
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

app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

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

    console.log(supplierval);

    var createproductsql = "INSERT INTO products (name,category,supplier_name,cost_price,price,unit) VALUES ('"+productnameval+"','"+categoryval+"','"+supplierval+"','"+cost_priceval+"','"+priceval+"','"+unitval+"')";

    console.log(createproductsql);

    dbConn.query(createproductsql, function (err, result) {
        if (err) throw err;
        console.log("product created");
    });
});