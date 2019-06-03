const mongoose =require('mongoose');


const CONNECTION_URL = "mongodb+srv://akshay-user_2011:Kunal@123@cluster0-m7aie.mongodb.net/test?retryWrites=true" ;
const DATABASE_NAME = "aeolus";

const options = {
        keepAlive:true,
        keepAliveInitalDelay:30000,
        userNewUrlParser:true
}

mongoose.Promise = global.Promise;

function initDB(){
mongoose.connect(CONNECTION_URL, options);

mongoose.connection.on('connected',()=>{
    console.log('mongoose default connection opens',+ CONNECTION_URL);    
});

mongoose.connection.on('error',(err)=>{
    console.log('handling mongodb error',+err);
});

mongoose.connection.on('disconnected',()=>{
    console.log('mongodb connection disconnectes');
});

process.on('SIGINT',()=>{
    mongoose.Connection.close(()=>{
        console.log('application terminated closing mongodb connection');
        process.exit(0);
    })
})
};

module.exports = initDB;