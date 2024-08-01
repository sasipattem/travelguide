import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Locations from '../Locations'

import './index.css'

class Home extends Component {
  state = {locationsList: [], isLoading: ''}

  componentDidMount() {
    this.getApipachages()
  }

  getApipachages = async () => {
    this.setState({isLoading: true})

    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.packages.map(eachdata => ({
        id: eachdata.id,
        name: eachdata.name,
        imageUrl: eachdata.image_url,
        description: eachdata.description,
      }))
      this.setState({locationsList: updatedData, isLoading: false})
    }
  }

  renderLoactionsList = () => {
    const {locationsList} = this.state
    return (
      <ul className="locations-list">
        {locationsList.map(eachLocation => (
          <Locations locationsDetials={eachLocation} key={eachLocation.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <hr className="hr-line" />
        <div className="locations-container">
          {isLoading ? this.renderLoader() : this.renderLoactionsList()}
        </div>
      </div>
    )
  }
}
export default Home
