import  Favorite  from '../models/favoriteModel.js';
import Location  from '../models/locationModel.js';

export const getFavorites = async (req, res) => {
  const userId = req.user.id;
  const favs = await Favorite.findAll({ where: { userId } });
  // повертаємо разом з даними локації
  const result = await Promise.all(
    favs.map(async (f) => {
      const loc = await Location.findByPk(f.placeId);
      return { ...f.toJSON(), location: loc };
    })
  );
  res.json(result);
};

export const addFavorite = async (req, res) => {
  const userId = req.user.id;
  const { placeId } = req.body;
  const exists = await Favorite.findOne({ where: { userId, placeId } });
  if (exists) return res.status(400).json({ message: 'Already favorited' });
  const fav = await Favorite.create({ userId, placeId });
  res.json(fav);
};

export const removeFavorite = async (req, res) => {
  const userId = req.user.id;
  const fav = await Favorite.findByPk(req.params.id);
  if (!fav) return res.status(404).json({ message: 'Not found' });
  if (fav.userId !== userId)
    return res.status(403).json({ message: 'Forbidden' });
  await fav.destroy();
  res.json({ message: 'Deleted' });
};
