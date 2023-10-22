import './index.css'

const TravelLocation = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-container">
      <div className="card-container">
        <img src={imageUrl} alt={name} />
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </li>
  )
}

export default TravelLocation
