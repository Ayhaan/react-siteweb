import React, {Fragment, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'


export default function Navigation() {
    //logique js combiné avec du css. Permet de faire l'animation du dropdown
    const [toggle, setToggle] = useState(false)
    let listIn = () => {
        setToggle(true)
    }
    let listOn = () => {
        setToggle(false)
    }

    //logique js combiné css qui permet l'animation de la navbar entiere
    const [toggleMenu, setToggleMenu] = useState(false)  
    const [largeur, setLargeur] = useState(window.innerWidth)   // on le démarra à la largeur à l'instant du site
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        const changeTaille = () => {
            setLargeur(window.innerWidth)
            if (window.innerWidth >500) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeTaille)
    }, [largeur])
    return (
        <Fragment>
            <div>
                <button onClick={toggleNav} className="hamburger">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {(largeur > 990 || toggleMenu) && (
                <ul className="col-6 nav">
                    <li>
                        <NavLink to="/" exact activeClassName='active'>
                            home
                        </NavLink>
                    </li>
                    <li onMouseOver={listIn} onMouseOut={listOn}>
                        < Dropdown toggle={toggle}/>
                    </li>
                    <li>
                        <NavLink to="/service" exact activeClassName='active'>
                            service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" exact activeClassName='active'>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" exact activeClassName='active'>
                            contact
                        </NavLink>
                    </li>
                </ul>

            )}


        </Fragment>
    )
}
