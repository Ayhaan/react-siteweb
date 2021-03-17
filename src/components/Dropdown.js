import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

export default function Dropdown({toggle}) {
    //Logique js pour la NavLink de gallery (ligne 23-24-25)
    const [url, setUrl] = useState()
    let lien1 = "http://localhost:3000/gallery1"
    let lien2 = "http://localhost:3000/gallery2"
    let lienUrl = document.URL
    useEffect(() => {
        let urlWeb = () => {
            if (lien1 === lienUrl || lien2 === lienUrl) {
                let lien = document.URL.slice(-8)
                setUrl(lien)
            }
        }
        urlWeb()
    }, [url, lien1, lien2, lienUrl])

    return (
        <div  className="drop-down" >
            <button className="bloc-top">
                <NavLink to={`/${url}`} exact onClick={ (e) => e.preventDefault()}>
                    GALLERY
                </NavLink>
            </button>
                <div style={toggle ? {opacity:'1'} : {opacity:'0'}}  className="bloc-links">
                    <ul>
                        <li>
                            <NavLink to='/gallery1' exact>
                                gallery 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery2' exact>
                                gallery 2
                            </NavLink>
                        </li>
                    </ul>
                </div> 
        </div>
    )
}
