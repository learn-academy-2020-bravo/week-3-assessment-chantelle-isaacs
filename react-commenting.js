// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This sets the state to an empty string, until it is reassigned by the user
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. This changes the state of the userInput to whatever the user has typed into the text box
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. This destructures userInput in the render 
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. Inside this input, when a user types, it calls the robot function*/}
          onChange={ this.robot }
          {/* 5. This sets the value the userInput state will be changed to*/}
          value={ userInput }
        />

        <div>
          {/* 6. This calls the Good Robot component */}
          <GoodRobot
            {/* 7. This allows userInput to be passed to the child components as props*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. This div acts as our React.Fragment separator
      <div>
        <h3>Good Robot</h3>
        {/* 9. This inputs whatever the user has typed into the props field*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. This exports the GoodRobot component to the parent
export default GoodRobot
