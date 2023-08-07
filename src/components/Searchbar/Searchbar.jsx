import { Component } from "react";
import PropTypes from 'prop-types';
import { SearchForm, Button, ButtonLabel, Input, Header } from "./Searchbar.styled";
import { FiSearch } from "react-icons/fi";

class Searchbar extends Component {
state = {
    search: ""
    }
    
    handlInput = (e) => {
    const { value } = e.target;
        this.setState({ search: value });
    }
    
    handlSubmit = (e) => {
        e.preventDefault();
        
        const { search } = this.state;

        if (search.trim() === '') {
            return
        };

        this.props.onSubmit(search);
    
        e.target.reset();
  };

    render() {
return (<Header>
        <SearchForm onSubmit={this.handlSubmit}>
            <Button type="submit">
            <ButtonLabel><FiSearch /></ButtonLabel>
           
            </Button>

            <Input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handlInput}
            />
        </SearchForm>
    </Header>)
    }
    
};

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}