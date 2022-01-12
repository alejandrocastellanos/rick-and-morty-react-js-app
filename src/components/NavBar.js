import React from 'react';

function NavBar(){
    return(
        <nav>
            <div className="navbar navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand text-uppercase" href="/">Rick and Morty Character App</a>
                </div>
            </div>
        </nav>
    )
}

export { NavBar };