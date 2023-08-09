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
    loader: false,
    btnLoad: false
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
          return
        }

        if ( page < Math.ceil(totalHits / 12)) {
          this.setState({ btnLoad: true })
        }

        else this.setState({ btnLoad: false })

        console.log(hits)
        console.log(totalHits)
       
      }
      
      ).catch(error => console.log(`Oops! Something went wrong! ${error}`)).finally(() => this.setState({loader: false}))
    
    
    }
    }

  
  render() {

    const { loader, picture, btnLoad } = this.state;
    return (<PhotoFinder>
      <Searchbar onSubmit={this.handleSubmit} />
      <ImageGallery picture={this.state.picture} />
      {btnLoad  && <Button handleBtnClick={this.handleBtnClick}/>}
      {/* {picture.length !==0 && <Button handleBtnClick={this.handleBtnClick} />} */}
      {loader && <Loader />}
      <ToastContainer />
    </PhotoFinder>
    
  );
  }
  
};
