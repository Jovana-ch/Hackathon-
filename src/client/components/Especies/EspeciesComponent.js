import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import ModalSeeEspecie from "./ModalSeeEspecie";
import ModalAddEspecie from "./ModalAddEspecie";
import { getAll } from "../../actions/especies";

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
        getAll().then(res=>this.setState({data: res}))
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
                
                <div className="especiesGeneral">
                    {data.map((especie)=>{
                        return(
                            <div className="especie" onClick={()=>this.onClickImage(especie)}>
                                <label>{especie.name}</label>
                                <img className="especieImg" src={especie.url} alt="display image"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}