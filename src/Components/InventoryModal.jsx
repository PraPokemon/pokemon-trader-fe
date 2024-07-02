import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InventoryModal = ({show, onHide, image, onTrade }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Pokemon Details</Modal.Title>
            </Modal.Header >
            <Modal.Body>
                <Row className="text-center" align-items-center>
                    <Col className="PositionRelative">
                        <img src={image} alt="PokemonPrevious" className="img-fluid" />
                        <p className="mt-3">Pichu</p>
                        <p className="mt-3">#0172</p>
                        <p className="mt-3">LVL: 5</p>
                        <p className="mt-3">Electric</p>
                        <div className="ArrowRight"></div>
                    </Col>
                    <Col className="PositionRelative">
                        <img src={image} alt="PokemonClicked" className="img-fluid" />
                        <p className="mt-3">Pikachu</p>
                        <p className="mt-3">#0025</p>
                        <p className="mt-3">LVL: 33</p>
                        <p className="mt-3">Electric</p>
                        <p className="mt-3">ITEM: Choice Specs</p>
                        <div className="ArrowRight"></div>
                    </Col>
                    <Col>
                        <img src={image} alt="PokemonPost" className="img-fluid" />
                        <p className="mt-3">Raichu</p>
                        <p className="mt-3">#0026</p>
                        <p className="mt-3">LVL: 50</p>
                        <p className="mt-3">Electric</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                    <Button variant="primary" onClick={onTrade}>
                        Trade
                    </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InventoryModal;