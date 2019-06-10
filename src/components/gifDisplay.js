import React, {Component} from 'react'
import demo from '../demo.gif'
import '../style/gif.css'
class GifDisplay extends Component {

  constructor(props){
      super(props)
  }

  render(){
      return(
        <div className="gif-box">
          <div className="center-flex">
              <img className="gif" src={this.props.gif}/>
          </div>
        </div>

      )
  }
}
export default GifDisplay
