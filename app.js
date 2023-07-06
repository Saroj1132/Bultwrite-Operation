const express=require('express')
const app=express()
const db=require('./config/db')
const mongoose=require('mongoose')
const data=require('./model/Data')
const path=require('path')
const session=require('express-session')


mongoose.connect(db.url, (err, res)=>{
    console.log('Connection succesfully')
})

app.use(session({
    saveUninitialized:true,
    resave:true,
    secret:"mysessionbulk"
}))

var MongoClient=require("mongodb").MongoClient

var url="mongodb://localhost/27017"

MongoClient.connect(url, function(err,db){
    if(err){
        console.log(err)
    }else{
        var dbo=db.db("newwork")
        const bulk=dbo.collection("bulkwork").initializeOrderedBulkOp()
        app.get('/bulkinsert', (req, res)=>{
            bulk.insert( { item: "abc123", defaultQty: 100, status: "A", points: 100 } );
            bulk.insert( { item: "ijk123", defaultQty: 200, status: "A", points: 200 } );
            bulk.insert( { item: "mop123", defaultQty: 540, status: "P", points: 985 } );
            bulk.execute().then(doc=>{
                res.send(doc)
            })
        })
        app.get('/find', (req, res)=>{
            dbo.collection("bulkwork").find().toArray().then(doc=>{
                res.send(doc)
            })
        })
        app.get('/bulkdelete', (req, res)=>{
            bulk.find({}).delete()
            ////bulk.find({item:'mop123'}).delete()
            //bulk.find({item:'mop123'}).deleteOne()
            // bulk.find({item: "ijk123"}).remove()
            //bulk.find({item: "abc123"}).removeOne()            
            bulk.execute().then(doc=>{
                res.send(doc)
            })
        })
        app.get('/bulkupdate', (req, res)=>{

            //in update you use with upsert like bulk.find().upsert().update()

            //bulk.find({item:'mop123'}).update({$set:{item: "ss", status: "Peeeee", points: 100}})
            //bulk.find({item:'ss'}).updateOne({$set:{item: "ss", status: "saroj", points: 100}})
            //bulk.find({item:'ss'}).replaceOne({item: "ss", status: "saroj", points: 7777})
            bulk.execute().then(doc=>{
                res.send(doc)
            })
        })
              

        //note arrayFilters always work with array method for update and update one
        //toJSON and toString this same like execute
        //getOpertions it is use for display data constently after inserts
    }
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.listen(3000)

