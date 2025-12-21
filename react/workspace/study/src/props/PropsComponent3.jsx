import React from 'react';

const PropsComponent3 = ({foodList}) => {
  console.log(foodList)
  foodList.forEach((food) => console.log(food))

  for(let food of foodList){
    console.log("for문" + food)
  }

  return (
    <>
      
    </>
  );
};

export default PropsComponent3;