import { sequelize } from './config/db.js';
import Item from './models/itemModel.js';
import MiniGuide from './models/miniGuideModel.js';

const items = [
  {
    title: "Замок Канків",
    description: "Розташований поблизу міста Виноградів у Закарпатській області, вражає своєю середньовічною архітектурою та мальовничим оточенням.",
    image: "../assets/images/kankiv.jpg",
    lat: 48.14,
    lng: 23.05,
    type: "castle",
  },
  {
    title: "Гора Говерла",
    description: "Найвища вершина України, висотою 2061 метр. Вона розташована в масиві Чорногора Карпат і є одним із найпопулярніших туристичних маршрутів країни.",
    image: "../assets/images/kankiv.jpg",
    lat: 48.09,
    lng: 24.3,
    type: "mountains",},
  {
    title: "Термальні води Косино",
    description: "Термальні басейни Косино у Закарпатті приваблюють відпочивальників цілющою водою та сучасними спа-комплексами.",
    image: "../assets/images/kosyno.jpg",
    lat: 48.33,
    lng: 22.69,
    type: "thermal",
  },
  {
    title: "Синевирське озеро",
    description: "Розташоване в серці Карпатських гір Закарпаття, вражає кришталево чистою водою та мальовничими лісовими пейзажами.",
    image: "../assets/images/synevyr.jpg",
    lat: 48.62,
    lng: 23.56,
    type: "lake",
  },
];

const miniGuides = [
  {
    title: "Гід по Ужгороду",
    description: "Маршрути по основних визначних місцях міста Ужгород з історичними фактами та порадами.",
    image: "../assets/images/uzhhorod.jpg",
    type: "city",
  },
  {
    title: "Гід по Закарпатських замках",
    description: "Огляд найвідоміших замків Закарпаття з історичними довідками та маршрутами.",
    image: "../assets/images/castles.jpg",
    type: "castle",
  },
  {
    title: "Гід по Карпатських озерах",
    description: "Маршрути до найгарніших озер Карпат, з порадами для туристів та активного відпочинку.",
    image: "../assets/images/lakes.jpg",
    type: "nature",
  },
];

(async () => {
  try {
    await sequelize.sync({ alter: true });

   await Item.destroy({ where: {} });
await MiniGuide.destroy({ where: {} });

    for (const item of items) {
      await Item.create(item);
    }

    for (const guide of miniGuides) {
      await MiniGuide.create(guide);
    }

    console.log('DB seeded! Старі записи видалені, нові локації та міні-гід додані.');
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
