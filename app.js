import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());
app.use(express.json());

import router from './routers/router.js';
app.use(router);


app.get('/', (req, res) => {
  res.send({ message: 'This is a get request' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
}); 
