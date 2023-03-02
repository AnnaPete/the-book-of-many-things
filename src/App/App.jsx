import React, { Component } from 'react'
// import { getData } from '../Utilities/APICalls'
// import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Header from '../Header/Header'
// import SavedPage from '../SavedPage/SavedPage'
// import DetailsPage from '../DetailsPage/DetailsPage'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: ''
    }
  }

  // componentDidMount = () => {
  //   getData()
  //   .then(data => {
  //     console.log(data)
  //     this.setState({ data: [...data] })
  //   })
  //   .catch(error => {
  //     this.setError(error)
  //   })
  // }

  

  setError = (error) => {
    if(error === 404) {
      this.setState({error: `Error ${error},  information not found.`})
    } else if(error === 500) {
      this.setState({error: `Error ${error},  please try again.`})
    } else {
      this.setState({error: `Something went wrong, please refresh the page and try again.`})
    }

  }

  render() {
    return (
      <main className="App">
        <Header />
        <Homepage />
        {this.state.error && <p className="error-message">{this.state.error}</p>}
      </main>
    )
  }
}

export default App;
