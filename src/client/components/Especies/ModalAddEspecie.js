import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form, Input, TextArea } from 'semantic-ui-react';

export default function ModalAddEspecie({ show, setShow }) {
    const [name, setName] = React.useState("");
    const [imagen, setImagen] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [cause, setCause] = React.useState("");
 
    function onShow() {
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
                <Form>
                    <label>Nombre de la especie</label><br/>
                    <Input type='text'/>
                    <label>Detalles de la especie</label><br/>
                    <TextArea />
                    <label>Causas por la que se cree que se está extinguiendo</label><br/>
                    <TextArea />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={()=>console.log("submit")}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    );
};