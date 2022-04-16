import { Router } from 'express';
import jwt from 'jsonwebtoken';
import db from '../database/CreateConnection.js';
import {login, authenticateToke} from '../authentication/authentication.js';
import {sendEmail} from '../email/nodemailer.js';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});
const router = Router();





router.get('/api/items', async (req, res) => {
  const items = await db.all('SELECT * FROM items;');
  res.send({ data: items });
});

router.get('/api/items/:id', async (req, res) => {
  const id = Number(req.params.id);
  const item = await db.all(`SELECT * FROM items WHERE id = ${id};`);
  res.send({ data: item });
});

router.post('/auth/login', async (req, res) => {
const email = req.body.email;
const password = req.body.password;
const user = {email: '' , isAuthorized: false}
const response =  await login(email, password);
 if(response){
   user.email=email;
   user.isAuthorized = true;
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)  
   res.send({ 'accessToken': accessToken }); 
  }
  else{
    res.send({ 'accessToken': false });
  } 
});

router.post('/sendemail', async (req, res) => {
const email = req.body.email;
const total = req.body.total;
const response = await sendEmail(email, total);
res.send({wasSent: response})
});

router.post('/auth/authenticateToken', (req, res) => {
  const token = req.body.userToken;
  const response = authenticateToke(token);
 res.send({'isAuthorized': response});
  });
 
export default router;