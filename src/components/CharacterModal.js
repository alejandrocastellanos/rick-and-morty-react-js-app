import React, {useContext} from 'react';
import {
    Button, Col, Container,
    Modal, ModalFooter, Row
} from "reactstrap";
import {AppContext} from "../AppContext";

function CharacterModal(){

    const {
        modalState,
        closeModal,
        character,
        characterInfo,
    } = useContext(AppContext);

    return (
        <Modal isOpen={modalState} centered={true} >
            <div>
                <Container className="border-modal-text">
                    <Row>
                        <Col>
                            <div className="mt-3">
                                <img src={characterInfo.image} alt=""/>
                            </div>
                        </Col>
                        <Col>
                            <div className="my-3">
                                <h5><strong>{character.toUpperCase()}</strong></h5>
                                <p><strong>Origin:</strong> {
                                    characterInfo.origin ? (
                                        characterInfo.origin.name
                                    ) : null
                                }</p>
                                <p><strong>Location:</strong> {
                                    characterInfo.location ? (
                                        characterInfo.location.name
                                    ) : null
                                }</p>
                                <p><strong>Gender:</strong> {characterInfo.gender}</p>
                                <p><strong>Specie:</strong> {characterInfo.species}</p>
                                <p><strong>Status:</strong> {characterInfo.status}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ModalFooter className="border-modal-text1">
                    <Button
                        color="secondary"
                        onClick={closeModal}
                    >
                        Close
                    </Button>
            </ModalFooter>
        </Modal>
    );
}

export { CharacterModal }