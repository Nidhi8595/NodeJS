const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://NodeJS:ET6C5ADOz4STTis5@learning-nodejs.2vps4.mongodb.net/";

const client = new MongoClient(URI);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        firstname: "ABC",
        lastname: "XYZ",
        city: "Noida",
    };

    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);

    // Read
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the User collection =>", countResult);

    // Find all documents with a filter of firstname: ABC

    const result = await collection.find({ firstname: "ABC" }).count();
    console.log("result => ", result);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// Install mongodb package
// Create a connection from code
// Documents CRUD - Create, Read, Update, Delete