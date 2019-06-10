import React, {Component} from 'react'
import axios from 'axios'
import GifDisplay from './gifDisplay.js'
require('dotenv').config()


class Gif extends Component {

  constructor(props){
      super(props)
      this.state = {
        result: [],
        search: ""
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
    //console.log(data[0].images)

    this.setState({result: data})
  //  console.log(this.state.result)
  }

  trending_gif_url = () => {
    let base_url = process.env.REACT_APP_DEV_API_URL;
    let key = process.env.REACT_APP_SECRET;
    let request = base_url + "trending?api_key=" + key + "&limit=25";
    console.log(request)
    return request;
  }

  fetchTrendingGifs = async (target) => {
    let data = (await axios.get(this.trending_gif_url())).data.data;
    this.setState({result: data});
  }

  onChangeHandle = (event) => {
      this.setState({search : event.target.value});
  }
  onSubmitHandle = (event) => {
     event.preventDefault();
    console.log("SUBMIT")
     this.fetchGifs(this.state.search);
  }

  componentWillMount(){
    this.fetchTrendingGifs();
  }
  render(){
    let result = this.state.result || [];

    let gifs = result.map((gif) =>
      <GifDisplay gif={gif.images.downsized.url} s/>
    );

      return (
        <div>
                <div className="gif-con">
                   <div className="gif-search">
                      <form onSubmit={this.onSubmitHandle}>
                         <label className="form-label">
                           Category
                           <input name="gifSearch" type="text" placeholder="cats" onChange={this.onChangeHandle}/>
                         </label>
                         <input type="submit" value="submit"/>
                      </form>
                   </div>
                </div>

          <div className="gif-flex-container">
            {gifs}
          </div>
        </div>
      )
  }
}
export default Gif
