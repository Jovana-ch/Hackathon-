import React from "react";

export default class HomeComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>Página principal</h1>
                <a href="/especies">Especies en peligro de extinción</a>
            </div>
        );
    }
}