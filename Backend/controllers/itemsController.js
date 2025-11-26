import { Item } from '../models/itemModel.js';

export const getItems = async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
};

export const createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
};
