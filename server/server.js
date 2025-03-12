const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require ('./router');

app.use(cors());
app.use(express.json());

const uri =  'mongodb+srv://athsarab:athsarab@cluster2.4qpsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2'

const connect = async () => {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connected to MongoDB');

    }
    catch (error){
        console.log('Error connecting to MongoDB');
    }
}

connect();

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

app.use('/api', router);