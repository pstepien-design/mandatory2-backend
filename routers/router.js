import { Router } from 'express';
import db from '../database/CreateConnection.js';
import {login} from '../authentication/authentication.js';
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
const response =  await login(email, password);
 if(response){
  res.send({ 'isAuthorized': true });   
  }
  else{
    res.send({ 'isAuthorized': false });
  } 
})
 
export default router;