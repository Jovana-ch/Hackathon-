import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchText: ""
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.onClickSearch = this.onClickSearch.bind(this);
    }

    handleChangeSearch(event){
        const target = event.target;
        const value = target.value;
        this.setState({searchText: value})
    }

    onClickSearch(){
        const {searchText} = this.state;
        console.log(searchText);
    }

    render(){
        const {searchText}= this.state;

        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Casi extintos</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/especies"}>Especies en peligro de extinción.</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/"}>¿Cómo usar el api?</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChangeSearch} value={searchText}/>
                            <button class="btn btn-outline mb1 black" type="button" onClick={this.onClickSearch}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}