const express = require("express");
const ejs = require("ejs");
var bodyParser=require("body-parser");
var mongoose = require('mongoose');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use( express.static( "views" ) );
app.use("/", require("./public/routes/root"));
app.use("/home", require("./public/routes/home"));
app.use("/reg", require("./public/routes/reg"));
app.use("/catalog", require("./public/routes/catalog"));
app.use("/authorization", require("./public/routes/authorization"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

mongoose.connect('mongodb://localhost:27017/myFirstDatabase');//db.config
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: String,
});
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;
    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
    db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('/');
})


app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('/');
}).listen(7777)


console.log("server listening at port 3000");
