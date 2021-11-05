import map from './mapPlace.gif'
import rayedArc from './rayedArc.jpg'


function Sky (props) {
  const data = props.info
  
  const imgs = data.map (img => img.img)

  console.log(props)
    return(
        <div>
            <img src= {map} alt= "map" />
        </div>
    )
}

export default Sky

