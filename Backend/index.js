import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './db';


dotenv.config();

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

dbConnection();



// Define routes




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
