import React, { useState, Component } from 'react'
import User from './components/User'
import Navbar from './components/Navbar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userA: {
        firstName: "Shinya",
        avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif"
      },
      userB: {
        firstName: "Hayato",
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png"
      },
      backColor: 'yellow',
      bootcamp: 'Rakuten Shoken'
    };

    // const [clickCount, setState] = useState(0);

    let colorMapper = () => {
      const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      return hexColor;
    };

    let clickHandler = () => {
      if (this.clickCount % 5 === 0) {
        this.setState({
          backColor: colorMapper(),
          clickCount: (this.clickCount + 1)
        });
      }
      else {
        this.setState({ clickCount: this.clickCount + 1 });
      }
    };

    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>React - state</h1>
        <p>Count is: {this.clickCount}</p>
        <button onClick={clickHandler}> Click me </button>
        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          bootcampName={this.state.bootcamp} />
        <User
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          bootcampName={this.state.bootcamp} />
      </div>
    );
  }
}

export default App