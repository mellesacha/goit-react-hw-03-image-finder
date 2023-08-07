import { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import fetchApi from "../service/Fetchapi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhotoFinder } from "./App.styled";


export class App extends Component {

  state = {
    search: "",
    picture: [],
    page: 1,
    loader: false
  }

  handleSubmit = (query) => {
    this.setState({ search: query, page: 1, picture: [] })
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

       this.setState({loader: true})
   
      fetchApi(search, page).then(({ totalHits, hits }) => {

        this.setState(prevState => { return { picture: [...prevState.picture, ...hits] } });

        if (totalHits === 0) {
          toast('Nothing found for your request')
          this.setState({ loader: false })
        }

        hits && this.setState({ loader: false }) 
      }
      
      ).catch(error => console.log(`Oops! Something went wrong! ${error}`))
      
    
    }
    }

  
  render() {

    const { loader, picture } = this.state;
    return (<PhotoFinder>
      <Searchbar onSubmit={this.handleSubmit} />
      <ImageGallery picture={this.state.picture}/>
      {picture.length !==0 && <Button handleBtnClick={this.handleBtnClick} />}
      {loader && <Loader />}
      <ToastContainer />
    </PhotoFinder>
    
  );
  }
  
};
