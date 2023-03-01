import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Homepage from '../Homepage/Homepage'
import Header from '../Header/Header'
// import SavedPage from '../SavedPage/SavedPage'
// import DetailsPage from '../DetailsPage/DetailsPage'
import './App.css'



class App extends Component {
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }



  render() {
    return (
      <main className="App">
        <Header />
        {/* <Switch>
          <Route exact path='/' render={ () => <Homepage /> } />
          <Route exact path='/details' render={ () => <DetailsPage /> } />
          <Route exact path='/saved' render={ () => <SavedPage /> } />
        </Switch> */}
        {this.state.error && <p className="error-message">{this.state.error}</p>}
      </main>
    )
  }
}

export default App;
