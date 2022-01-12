import React, {useContext} from 'react';
import { NavBar } from '../components/NavBar';
import { Characters } from '../components/Characters';
import { Pagination } from '../components/Pagination';
import { SearchCharacter } from '../components/SearchCharacter';
import { Footer } from '../components/Footer';
import {AppContext} from "../AppContext";

import 'bootstrap/dist/css/bootstrap.min.css';



function AppUI() {

  const {
    info,
    onPrevious,
    onNext,
  } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <SearchCharacter/>

        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />

        <Characters/>

        <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
        />

      </div>
      <Footer />
    </>
  );
}

export { AppUI };
