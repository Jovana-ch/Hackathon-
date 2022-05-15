import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import ModalSeeEspecie from "./ModalSeeEspecie";
import ModalAddEspecie from "./ModalAddEspecie";

const data = [{title: "Tigre", url: "http://1.bp.blogspot.com/-_RF_XDfRVJg/TcGlZnIuFjI/AAAAAAAAAPA/Q7H9QBFNXZA/s1600/572737-1024x768-tiger.jpg",
    description: "El tigre...", cause: "Caza excesiva"},
    {title: "Tortuga", url: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg",
    description: "La tortuga...", cause: "Caza excesiva"},
    {title: "Tortuga caguama", url: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg",
    description: "La tortuga caguama...", cause: "Caza excesiva"},
    {title: "Tortuga2", url: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg",
    description: "La tortuga 2...", cause: "Caza excesiva"},
    {title: "Tortuga caguama2", url: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg",
    description: "La tortuga caguama 2...", cause: "Caza excesiva"},
    {title: "Tigre2", url: "http://1.bp.blogspot.com/-_RF_XDfRVJg/TcGlZnIuFjI/AAAAAAAAAPA/Q7H9QBFNXZA/s1600/572737-1024x768-tiger.jpg",
    description: "El tigre 2...", cause: "Caza excesiva"}]
export default class EspeciesComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            data: [],
            showModal: false,
            showModalAdd: false,
            dataEspecie: []
        }

        this.setShowModalSee = this.setShowModalSee.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
        this.setShowModalAdd = this.setShowModalAdd.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
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

    setShowModalAdd(){
        const {showModalAdd} = this.state;
        this.setState({showModalAdd: !showModalAdd});
    }

    onClickAdd(){
        this.setShowModalAdd();
    }

    render(){
        const {data, showModal, dataEspecie, showModalAdd} = this.state;

        return(
            <div>
                <ModalSeeEspecie show={showModal} setShow={this.setShowModalSee} data={dataEspecie}/>
                <ModalAddEspecie show={showModalAdd} setShow={this.setShowModalAdd} />
                <br/>
                <h1>Especies en peligro de extinción</h1><br/>
                <h6>¿Sabes de otra especie marina en peligro de extinción? Agrégala 
                    <FontAwesomeIcon icon={faPlusCircle} color="black" 
                    onClick={this.onClickAdd} style={{marginLeft:"2%"}}/></h6>
                <div className="especiesGeneral">
                    {data.map((especie)=>{
                        return(
                            <div className="especie" onClick={()=>this.onClickImage(especie)}>
                                <label>{especie.title}</label>
                                <img src={especie.url} alt="display image"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}