import { Router } from 'express';
const router = Router();

const Items = [
  {
    id: 1, name: "hoodie", price: 500, description: "nice"
  },
  {
    id: 2, name: "cup", price: 250, description: "supernice"
  },
  {
    id: 3, name: "something", price: 1000, description: "expensive"
  },
  {
    id: 4, name: "Notebook", price: 100, description: "necessary"
  },
  {
    id: 5, name: "Pen", price: 50, description: "Cheap"
  },
  {
    id: 6, name: "Pencil", price: 20, description: "The cheapest"
  }
]

router.get('/api/items', async (req, res) => {
  const items = Items
  res.send({ data: items });
});

export default router;