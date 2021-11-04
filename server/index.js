import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './server/route.js';

const app = express();
app.use(express.json({extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);


const URL =
  "mongodb+srv://soloproject:codesmith@cluster0.rqpos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = '8080';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
