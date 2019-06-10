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
          <img className="gif" src="https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/480w_s.jpg?cid=d4d3bffa5cfd81224661644e2e62842e&rid=480w_s.jpg"/>
          </div>

        </div>
      )
  }
}
export default GifDisplay
