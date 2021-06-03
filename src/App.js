import React, { useState } from 'react'
import User from './components/User'
import Navbar from './components/Navbar'

function App() {
  let state = {
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
  }

  const [clickCount, setState] = useState(0);

  let colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    return hexColor
  }

  let clickHandler = () => {
    if (clickCount % 5 === 0) {
      setState({
        backColor: colorMapper(),
        clickCount: clickCount + 1
      })
    }
    else {
      setState({ clickCount: clickCount + 1 })
    }
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>React - state</h1>
      <p>Count is: {clickCount}</p>
      <button onClick={clickHandler}> Click me </button>
      <User
        theColor={state.backColor}
        firstName={state.userA.firstName}
        image={state.userA.avatarUrl}
        bootcampName={state.bootcamp}
      />
      <User
        firstName={state.userB.firstName}
        image={state.userB.avatarUrl}
        bootcampName={state.bootcamp}
      />
    </div>
  )
}

export default App