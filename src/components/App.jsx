import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import fetchApi from "../service/Fetchapi";


export class App extends Component {

  state = {
    search: "",
    picture: '',
    page: 1,
    loadBtn: false,
    loader: false
  }

  handleSubmit = (query) => {
    this.setState({ search: query, loader: true });

    console.log(this.state.search)
    
  }

  handleBtnClick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      }
     
    })
  }
  componentDidUpdate(_, prevState) {
    
    const { search, page} = this.state;

    if (search !== prevState.search || page !== prevState.page) {
       fetchApi(search, page).then(r => this.setState(ps => { return { picture: [...ps.picture, ...r.hits] } }))
      
    }
}
  
  render() {
    return (<>
      <Searchbar onSubmit={this.handleSubmit}  />
      <ImageGallery picture={this.state.picture} />
      {this.state.picture && <Button handleBtnClick={this.handleBtnClick} />}
      {this.state.loader && <Loader />}
      
      
    </>
    
  );
  }
  
};
