import React, {useContext} from 'react';
import './Style.css';
import {AppContext} from "../AppContext";

function SearchCharacter(){

    const {
        name,
        setName,
        onClickSearchCharacter,
        onClickAllCharacter,
        click
    } = useContext(AppContext);

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3 w-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Character Name"
                        value={name}
                        onInput={e => setName(e.target.value)}
                    />
                    <button
                        className={`btn btn-outline-primary ${!name && 'HiddenButton'}`}
                        type="button"
                        onClick={onClickSearchCharacter}
                    >
                        Search
                    </button>
                    <button
                        className={`btn btn-outline-primary ${!name && 'HiddenButton'}`}
                        type="button"
                        onClick={onClickAllCharacter}
                    >
                        🔄
                    </button>
                </div>
                <br/>
            </div>
            {
                click ? (
                    <div className="d-flex justify-content-center">
                        Filter:&nbsp;<p style={{"font-weight": "bold"}}>{name}</p>
                    </div>
                ) : null
            }
        </>

    )
}

export { SearchCharacter };