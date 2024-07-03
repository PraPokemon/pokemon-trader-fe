import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TradeOfferModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Trade</Modal.Title>
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
        <Button onClick={props.onHide}>Accept trade</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TradeOfferModal;
