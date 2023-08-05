import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import fetchApi from "../service/Fetchapi";

export class App extends Component {

  state = {
    search: "", 
    picture: '',
    page: 1,
  }

  handleSubmit = (query) => {
    this.setState({ search: query });
    const { page, search } = this.state;
     
    fetchApi(search, page).then(r => this.setState({ picture: r.hits }))
    
    console.log(search)
  }

  handleBtnclick = () => {
    this.setState(prevState =>
    {
      return {
      page: prevState.page + 1
      }
     
    })
  }
  componentDidUpdate(prevProps, prevState) {
    
    const {search, page} = this.state;
    const prevPage = prevState.page;


      if (page !== prevPage) {
        fetchApi(search, page).then(r => this.setState(ps => { return {picture: [...ps.picture, ...r.hits]}}));
      }
    }
  

  render() {
    return (<>
      <Searchbar onSubmit={this.handleSubmit}  />
      <ImageGallery picture={this.state.picture} />
      <Button handleBtnclick={this.handleBtnclick } />
    </>
    
  );
  }
  
};
