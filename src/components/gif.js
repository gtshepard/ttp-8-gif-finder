import React, {Component} from 'react'
import axios from 'axios'
import GifDisplay from './gifDisplay.js'
require('dotenv').config()


class Gif extends Component {

  constructor(props){
      super(props)
      this.state = {
        result: [],
        apple: "pk"
      }
  }

  search_gif_url = (target) => {
    let base_url = process.env.REACT_APP_DEV_API_URL;
    let key = process.env.REACT_APP_SECRET;
    let request = base_url + "search?q=" + target + "&" + "api_key=" + key + "&limit=25";
    return request;
  }

  fetchGifs = async (target) => {
    let data = (await axios.get(this.search_gif_url(target))).data.data;
    console.log(data)
    this.setState({result: data})
    console.log(this.state.result)
  }

  componentDidMount() {
    this.fetchGifs("cats");
    this.setState({apple: "cookie"});
  }

  render(){
    let result = this.state.result || [];

    let gifs = result.map((gif) =>
      <GifDisplay gif={gif.url}/>
    );

      return (
        <div className="gif-flex-container">
          {gifs}
        </div>
      )
  }
}
export default Gif
