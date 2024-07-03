import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const InventoryModal = ({show, onHide, image, onTrade, name, pokedexNumber, level, type, itemHeld, evolutionImages, evolutionNames }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Pokemon Details</Modal.Title>
            </Modal.Header >
            <Modal.Body>
                <Row className="text-center" align-items-center>
                    <Col>
                        <img src={image} alt={name} className="img-fluid" />
                    </Col>
                    <Col className="text-start">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Pokedex Number:</strong> #{pokedexNumber}</p>
                        <p><strong>Level:</strong> {level}</p>
                        <p><strong>Type:</strong> {type}</p>
                        <p><strong>Item Held:</strong> {itemHeld || "None"}</p>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" onClick={onTrade}>
                                Trade
                            </Button>
                        </div>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row className="mt-4 justify-content-center">
                    {evolutionImages.map((evolutionImage, index) => (
                        <Col key={index} xs="auto" className="mb-3">
                            <Card style={{ width: '10rem', cursor: 'pointer' }}>
                                <Card.Img variant="top" src={evolutionImage} style={{ maxHeight: '8rem', objectFit: 'contain' }} />
                                <Card.Body>
                                    <Card.Title className="text-center" >{evolutionNames[index]}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default InventoryModal;