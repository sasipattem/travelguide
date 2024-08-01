import './index.css'

const Locations = props => {
  const {locationsDetials} = props
  const {name, imageUrl, description} = locationsDetials
  return (
    <li className="locations-item">
      <div className="image-card-container">
        <img src={imageUrl} alt={name} className="img" />
        <div className="text-container">
          <h1 className="name-heading">{name}</h1>
          <p className="description-text">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default Locations
