import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalSeeEspecie({ show, setShow, data }) {
    const [name, setName] = React.useState("");
    const [imagen, setImagen] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [cause, setCause] = React.useState("");
 
    function onShow() {
        setName(data.title);
        setImagen(data.url);
        setDescription(data.description);
        setCause(data.cause);
    };

    function onHide() {
        setName("");
        setImagen("");
        setCause("");
        setDescription("");
        setShow();
    };

    return (
        <Modal show={show} onShow={onShow} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>¡Especie en peligro de extinción!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{display: 'flex', flexDirection: "column", alignItems:"center"}}>
                    <img src={imagen} alt="display image" style={{borderRadius: '5px'}}/>
                    <h3>{name}</h3><br/>
                    <label>{description}</label><br/>
                    <h6>Causas por las que está en peligro de extinción: </h6>
                    <label>{cause}</label>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};