import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TradeOfferModal({ children, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        onClick={handleShow}
        className="ContainerButon"
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="TradeOfferGrid">
            <div className="TradeOfferImage">
              <img src="" alt="" />
              Add pokemon image
            </div>
            <div className="TradeOfferReqirements">
              {" "}
              Requirements for the trade
            </div>
            <div className="TradeOfferPokemonDiscription">Pokemon detatils</div>
          </div>
          <hr />
          <div>Add your pokemon who mach the reqirements</div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TradeOfferModal;
