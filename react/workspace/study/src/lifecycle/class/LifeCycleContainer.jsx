import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

//랜덤 컬러
const getRendomColor = () => {
  return '#' + Math.floor(Math.random() * 16677215).toString(16)
}

class LifeCycleContainer extends Component {

  //부모의 초기 컬러
  state = {
    color: "#000"
  }  

  handleColorOnClick = () => {
    this.setState({
      color: getRendomColor()
    })
    console.log(this.state.color)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleColorOnClick}>색상 변경하기</button>
        <LifeCycleComponent color={this.state.color}/>
      </div>
    );
  }
}

export default LifeCycleContainer;

/**class 개념 : 공통된 것들을 추상화로 객체로 묶어서  */