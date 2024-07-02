import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const InventoryModal = ({show, onHide, image}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Pokemon Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={image} alt="Pokemon" className="img-fluid" />
                <p className="mt-3">Name: Pikachu</p>
                <p className="mt-3">National Dex №: 0025</p>
                <p className="mt-3">LVL: 33</p>
                <p className="mt-3">Type: Electric</p>
                <p className="mt-3">Item: Choice Specs</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Link to="/">
                    <Button variant="primary">
                        Trade
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

export default InventoryModal;