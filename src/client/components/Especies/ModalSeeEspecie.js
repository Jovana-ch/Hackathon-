import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalSeeEspecie({ show, setShow, data }) {
    const [name, setName] = React.useState("");
    const [imagen, setImagen] = React.useState("");
 
    function onShow() {
        setName(data.name);
        setImagen(data.imagen);
    };

    function onHide() {
        setName("");
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
                    <h1>{name}</h1><br/>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};