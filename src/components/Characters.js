import React, {useContext} from 'react';
import { CharacterModal } from './CharacterModal';
import {AppContext} from "../AppContext";

function Characters(){

    const {
        characters,
        openModal,
        GetCharacter,
    } = useContext(AppContext);

    return(
        <>
            <CharacterModal />

            <div className="row">
                {
                    characters.map((item, index) => (
                        <div key={index} className="col mb-4">
                            <div
                                className="card black-border"
                                style={{minWidth: "200px"}}
                                onClick={() => {
                                    openModal();
                                    GetCharacter(item.id);
                                }}
                            >
                                <img src={item.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <hr/>
                                    <p>Location: {item.location.name}</p>
                                    <p>Gender: {item.gender}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export { Characters };
