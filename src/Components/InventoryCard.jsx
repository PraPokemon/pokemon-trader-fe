import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InventoryModal from './InventoryModal';
import InventoryTradeModal from './InventoryTradeModal';

const images = ['https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png'];




const InventoryCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
    

    const pokemonList = ['Pikachu', 'Raichu', 'Bulbasaur', 'Charmander', 'Squirtle'];

    const evolutionImages = ['https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png', 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-128.png'];

    const evolutionNames = ['Pichu', 'Pikachu', 'Raichu'];

    const cardClick = (image) => {
        console.log('Pokemon clicked: $(image)');
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openTradeModal = () => {
        setIsModalOpen(false);
        setIsTradeModalOpen(true);
    };

    const closeTradeModal = () => {
        setIsTradeModalOpen(false);
    };

  return (
    <div>
            <Row xs={1} md={6} className="g-4">
                {images.map((image, idx) => (
                    <Col key={idx}>
                        <Card onClick={() => cardClick(image)} style={{ cursor: 'pointer' }}>
                            <Card.Img variant="top" src={image}/>
                        </Card>
                    </Col>
                ))}
            </Row>
        <InventoryModal
        show={isModalOpen}
        onHide={closeModal}
        image={selectedImage}
        name="Pikachu"
        pokedexNumber="0025"
        level="33"
        type="Electric"
        itemHeld="Choice Specs"
        evolutionImages={evolutionImages}
        evolutionNames={evolutionNames}
        onTrade={openTradeModal}
        />
        <InventoryTradeModal
        show={isTradeModalOpen}
        onHide={closeTradeModal}
        image={selectedImage}
        pokemonList={pokemonList}
        />
    </div>
  );
}

export default InventoryCard;