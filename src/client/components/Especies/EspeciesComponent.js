import React from "react";

import ModalSeeEspecie from "./ModalSeeEspecie";

const data = [{name: "Tigre", imagen: "http://1.bp.blogspot.com/-_RF_XDfRVJg/TcGlZnIuFjI/AAAAAAAAAPA/Q7H9QBFNXZA/s1600/572737-1024x768-tiger.jpg"},
    {name: "Tortuga", imagen: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg"},
    {name: "Tortuga caguama", imagen: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg"},
    {name: "Tortuga", imagen: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg"},
    {name: "Tortuga caguama", imagen: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg"},
    {name: "Tigre", imagen: "http://1.bp.blogspot.com/-_RF_XDfRVJg/TcGlZnIuFjI/AAAAAAAAAPA/Q7H9QBFNXZA/s1600/572737-1024x768-tiger.jpg"}]
export default class EspeciesComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            data: [],
            showModal: false,
            dataEspecie: []
        }

        this.setShowModalSee = this.setShowModalSee.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
    }

    componentDidMount(){
        this.setState({data: data})
    }

    setShowModalSee(){
        const {showModal} = this.state;
        this.setState({showModal: !showModal})
    }

    onClickImage(dataEspecie){
        this.setState({dataEspecie: dataEspecie});
        this.setShowModalSee();
    }

    render(){
        const {data, showModal, dataEspecie} = this.state;

        return(
            <div>
                <ModalSeeEspecie show={showModal} setShow={this.setShowModalSee} data={dataEspecie}/>
                <h1>Especies en peligro de extinción</h1><br/>
                <div className="especiesGeneral">
                    {data.map((especie)=>{
                        return(
                            <div className="especie" onClick={()=>this.onClickImage(especie)}>
                                <label>{especie.name}</label>
                                <img src={especie.imagen} alt="display image"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}