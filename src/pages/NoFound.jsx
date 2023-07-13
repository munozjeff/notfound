import React from 'react';
import "./style.css"

function NoFound() {
    return(
        <>
            <div className='title-no-found'>
                <h1>404 Not Found</h1>
            </div>
            <div>
                <figure className='figure-no-found'>
                    <img src="/src/assets/Scarecrow.png" alt="Scarecrow" />
                </figure>
                <div className='container-info-no-found'>
                    <h2>I HAVE BAD NEWS FOR YOU</h2>
                    <p>The page you are looking for might be remove or is temporaly unavailable</p>
                    <input type='button' className='hvr-float' value="BACK TO HOME PAGE"/>
                </div>
            </div>
        </>
    )
}
export {NoFound}