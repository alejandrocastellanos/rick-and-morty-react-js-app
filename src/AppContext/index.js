import React, {useEffect, useState} from 'react';

const AppContext = React.createContext(undefined, undefined);

function AppProvider(props){

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const url = "https://rickandmortyapi.com/api/character"

    const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(error => console.error(error))
    };

    useEffect(() =>{
        fetchCharacters(url);
    }, [])


    const onPrevious = () => {
        fetchCharacters(info.prev);
    };

    const onNext = () => {
        fetchCharacters(info.next);
    };

    const [modalState, setModalState] = React.useState(false);
    const [characterId, setCharacterId] = React.useState(null);

    const openModal = () => {
        setModalState(true);
    }

    const closeModal = () => {
        setModalState(false);
    }

    const [name, setName] = React.useState('');
    const [click, setClick] = React.useState(false);
    const searchCharacterUrl = url + '/?name=' + name.toLowerCase()

    const onClickSearchCharacter = () => {
        fetchCharacters(searchCharacterUrl);
        setClick(true);
    }

    const onClickAllCharacter = () => {
        fetchCharacters(url);
        setName('');
        setClick(false);
    }

    const [character, setCharacter] = useState('');
    const [characterInfo, setCharactersInfo] = useState({});

    const GetCharacter = (id) => {
        setCharacterId(id)
        const urlCharacterId = url + "/" + id
        fetch(urlCharacterId)
            .then(response => response.json())
            .then(data => {
                setCharacter(data.name);
                setCharactersInfo(data);
            })
            .catch(error => console.error(error))
    };

    return(
        <AppContext.Provider value={{
            fetchCharacters,
            url,
            info,
            onPrevious,
            onNext,
            characters,
            modalState,
            closeModal,
            characterId,
            openModal,
            setCharacterId,
            name,
            setName,
            onClickSearchCharacter,
            onClickAllCharacter,
            click,
            GetCharacter,
            characterInfo,
            character
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };