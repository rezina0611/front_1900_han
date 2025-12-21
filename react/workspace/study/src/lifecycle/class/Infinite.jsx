import React, { Component } from 'react';

class Infinite extends Component {

  state = {
    users: []
  }

  componentDidMount(){
    const getDatas = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const datas = await response.json()
      console.log("리랜더링")
      return datas
    }
    getDatas()
      .then((datas) => this.setState({users: datas}))
  }

  render() {

    return (
      <div>
        
      </div>
    );
  }
}

export default Infinite;