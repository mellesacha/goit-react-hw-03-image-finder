import { Component } from "react";

class Searchbar extends Component {
state = {
    search: ""
    }
    
    handlInput = (e) => {
    const { value } = e.target;
        this.setState({ search: value });
        console.log(this.state.search)
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
return (<header className="searchbar">
        <form className="form" onSubmit={this.handlSubmit}>
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handlInput}
            />
        </form>
    </header>)
    }
    
};

export default Searchbar;