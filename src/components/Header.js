import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
       <header className='container-fluid py-3'>
            <nav className="row">
                <div className="col-lg-3 col-sm-12 ">
                    <h2>Photosen</h2> 
                </div>
        
                < Navigation />

                <div className="col-lg-3 col-sm-12 social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>               
                    <i className="fab fa-instagram"></i>  
                    <i className="fab fa-youtube"></i>      
                </div>
           </nav>
       </header>
    )
}
