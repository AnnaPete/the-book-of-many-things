import React from 'react'
import { getData } from '../Utilities/APICalls'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Header from '../Header/Header'
import Overview from '../Overview/Overview'
// import SavedPage from '../SavedPage/SavedPage'
import './App.css'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoading: true,
      error: null
    }
  }

  componentDidMount = () => {
    getData()
    .then(data => {
      this.setState({
        data: data, 
        isLoading: false
      })
    })
    .catch(error => {
      this.setState({
        error: error,
        isLoading: false
      })
    })
  }

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
    const { data, isLoading, error } = this.state

    if (isLoading) {
      return (
        <h3>Loading...</h3>
      )
    }

    if (error) {
      return (
        <h3>Error: {error.message}</h3>
      )
    }

    return (
      <main className="App">
        <Header data={ data }/>
        <Switch>
          <Route exact path='/' component={ Homepage } />
          <Route path='/:path' render={({match}) => {
            const endpoint = match.params.path
            return (
              <Overview data={data[endpoint]} title={endpoint}/>
            )
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
