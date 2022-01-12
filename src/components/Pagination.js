import React from 'react';

function Pagination({prev, next, onPrevious, onNext}){

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return(
        <nav className="my-4">
            <ul className="pagination justify-content-center">
                {
                    prev ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handlePrevious}>Previous</button>
                        </li>
                    ) : null
                }
                {
                    next ? (
                        <li className="page-item">
                            <button className="page-link" onClick={handleNext}>Next</button>
                        </li>
                    ) : null
                }
            </ul>
        </nav>
    )
}

export { Pagination };