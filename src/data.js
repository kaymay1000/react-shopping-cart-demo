const PRODUCTS = [
  { name: 'Apple', price: '$0.79', stocked: true, count: 0 },
  { name: 'Banana', price: '$0.50', stocked: true, count: 0 },
  { name: 'Peach', price: '$0.85', stocked: false, count: 0 },
  { name: 'Watermelon', price: '$1.50', stocked: true, count: 0 },
  { name: 'Mango', price: '$2.00', stocked: false, count: 0 }
];

const FETCH_DATA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (true) {
          resolve(PRODUCTS);
        } else {
          reject('...rejected...');
          throw new Error('...caught...');
        }
      } catch (error) {
        console.error('ERROR: ', error.message);
      }
    }, 3000);
  });
};

export default FETCH_DATA;
