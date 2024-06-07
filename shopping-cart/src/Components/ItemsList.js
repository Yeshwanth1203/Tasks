import React from 'react';
import Item from './Item';

const ItemList = () => {
  const items = [
    { id: 1, name: 'IPhone 15Pro', description: 'The ultimate iPhone.', price: 134900.00, image: 'https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__bpnjhcrxofqu_large.png' },
    { id: 2, name: 'IPhone 15', description: 'A total powerhouse.', price: 79900.00, image: 'https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15__fm75iyqlkjau_large.png' },
    { id: 3, name: 'IPhone 14', description: 'As amazing as ever', price: 69900, image: 'https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_14__cjgvgyn9cquu_large.png' },
    { id: 4, name: 'Xiaomi 14 Ultra', description: 'Quad Curved Display with Dolby Vision®', price: 99999, image: 'https://i03.appmifile.com/826_item_in/07/03/2024/e8576e6dde946bebca0d455d434b53ed.jpg?thumb=1&w=500&f=webp&q=85' },
    { id: 5, name: 'Xiaomi 14', description: 'Next-Generation Leica Optics', price: 69999, image: 'https://i03.appmifile.com/387_item_in/05/03/2024/1714e6e2a8c6e93e3d48230c795f83ba.jpg?thumb=1&w=500&f=webp&q=85' }
  ];

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
