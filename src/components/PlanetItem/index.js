// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props

  const {name, imageUrl, description} = planet

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
