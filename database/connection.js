const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb+srv://akshay-user_2011:Kunal@123@cluster0-m7aie.mongodb.net/test?retryWrites=true';
const DATABASE_NAME = "aeolus";

var database , collections;
module.exports = async () => {

    MongoClient.connect(MONGO_URL, { useNewUrlParser: true}, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collections = database.collection("labs");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
  
}



/*const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;


const CONNECTION_URL = "mongodb+srv://akshay-user_2011:Kunal@123@cluster0-m7aie.mongodb.net/test?retryWrites=true" ;
const DATABASE_NAME = "aeolus";

var database , collections;
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true}, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collections = database.collection("labs");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
*/

