// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  //   const settings = {
  //     dots: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   }

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planet={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
