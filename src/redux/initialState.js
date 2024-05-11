const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed1.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 4,
      discount: '-20%',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed2.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed3.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed4.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed5.jpg',
      favourite: true,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed6.jpg',
      favourite: true,
      comparison: false,
      userRating: 4,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed7.jpg',
      favourite: true,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed8.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed9.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed10.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 1,
      hotDeals: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed11.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed1.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed2.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed3.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed4.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
      hotDeals: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed5.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed6.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed7.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed8.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
      hotDeals: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed9.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 0,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed10.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed11.jpg',
      favourite: true,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed8.jpg',
      favourite: false,
      comparison: false,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/bed2.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-1.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-2.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-3.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-4.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-5.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-6.jpeg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-1.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: false,
      image: './images/furnitures/chair-2.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-3.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-4.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-5.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-6.jpeg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-1.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-2.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-3.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/chair-4.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa1.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa2.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa3.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa4.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa5.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa1.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa2.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa3.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa4.jpg',
      favourite: true,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa5.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: './images/furnitures/sofa1.jpg',
      favourite: false,
      comparison: false,
      oldPrice: 45,
      userRating: 0,
    },

  ],
  cart: {
    products: [],
  },
};

export default initialState;
