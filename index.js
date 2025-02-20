const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middlewire
app.use(cors({origin: ["http://localhost:5173", "https://tourism-6b17e.web.app"]}));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zdajqzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const spotCollection = client.db('spotDB').collection('spot');
    const categoryCollection = client.db('spotDB').collection('categories');
    const countriesCollection = client.db('spotDB').collection('countries');

    app.get('/spot', async (req, res) => {
      const cursor = spotCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/spot/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const spot = await spotCollection.findOne(query);
      res.send(spot)
    })

    app.get('/categories', async (req, res) => {
      const cursor = categoryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/categories/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const spot = await categoryCollection.findOne(query);
      res.send(spot)
    })

    app.get('/countries', async (req, res) => {
      const cursor = countriesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/countries/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const spot = await countriesCollection.findOne(query);
      res.send(spot)
    })

    app.post('/spot', async (req, res) => {
      const newSpot = req.body;
      console.log(newSpot);
      const result = await spotCollection.insertOne(newSpot);
      res.send(result)
    })

    app.put('/spot/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id : new ObjectId(id) };
      const options = { upsert: true };
      const updatedSpot = req.body;
      const spot = {
        $set: {
          photo: updatedSpot.photo,
          touristsSpotName: updatedSpot.touristsSpotName,
          country: updatedSpot.country,
          location: updatedSpot.location,
          cost: updatedSpot.cost,
          description: updatedSpot.description,
          email: updatedSpot.email,
          name: updatedSpot.name, seasonality: updatedSpot.seasonality,
          totaVisitorsPerYear: updatedSpot.totaVisitorsPerYear,
          travelTime: updatedSpot.travelTime,
        }
      }
      const result = await spotCollection.updateOne(filter,spot,options);
      res.send(result);
    })

    app.delete('/spot/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await spotCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('Tourism working')
})

app.listen(port, () => {
  console.log(`waiting for success at port : ${port}`);
})