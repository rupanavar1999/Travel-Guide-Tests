import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelLocation from '../TravelLocation'

import './index.css'

class Home extends Component {
  state = {locationList: [], isLoading: false}

  componentDidMount() {
    this.apiUrlPackages()
  }

  apiUrlPackages = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.setState({
        locationList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLocationList = () => {
    const {locationList} = this.state
    return (
      <ul>
        {locationList.map(eachItem => (
          <TravelLocation locationData={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <>
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    </>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="outline-line" />
        <div>{isLoading ? this.renderLoader() : this.renderLocationList()}</div>
      </div>
    )
  }
}

export default Home
