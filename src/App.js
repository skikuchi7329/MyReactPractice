import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'ゲスト'};
  }

    handleClick(name) {
      this.setState({name: name});
    }

    render() {
      return (
        <div>
          <h1>こんにちは、{this.state.name}さん！</h1>
          <button onClick={()=>this.handleClick('しょぺこ')}>しょぺこ</button>
          <button onClick={()=>this.handleClick('きるちゃん')}>きるちゃん</button>
        </div>
      )
    }
}

export default App;
