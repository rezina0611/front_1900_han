import React from 'react';
import Food from './Food';

const FoodContainer = () => {
  const foods = [
    {
      id: 1,
      name: '샐러드'
    },
    {
      id: 2,
      name: '봉골레 파스타'
    },
    {
      id: 3,
      name: '김치찌개'
    },
    {
      id: 4,
      name: '스테이크'
    },
    {
      id: 5,
      name: '떢볶이'
    }
  ]

  //const foodList = foods.map((food, i) => <li key={i}>{food.name}</li>)
  const foodList = foods.map(({name}, i) => <Food key={i} name={name} />)

  return (
    <div>
      {foodList}
    </div>
  );
};

export default FoodContainer;