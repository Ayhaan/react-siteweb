import React from 'react'

export default function Formulaire() {
    return (
        <div className="formulaire-row container">
                <form action="" className="formulaire">
                    <div className="full-name">
                        <div className="row-input firstName">
                            <label className="text-white" htmlFor="name">First Name</label>
                            <input type="text" placeholder="Nom"/>
                        </div>
                        <div className="row-input lastName">
                            <label className="text-white" htmlFor="name">Last Name</label>
                            <input type="text" placeholder="Prénom"/>
                        </div>
                    </div>
                    <div className="row-input">
                        <label className="text-white" htmlFor="name">Email</label>
                        <input type="mail" placeholder="E-mail"/>

                    </div>
                    <div className="row-input">
                        <label className="text-white" htmlFor="name">Subject</label>
                        <input type="text" placeholder="Objet"/>
                    </div>
                    <div className="row-input">
                        <label className="text-white" htmlFor="name">Message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Votre message..."></textarea>
                    </div>

                    <button>Envoyer message</button>
                </form>
                <div className="informations">
                    <div>
                        <p className="text-white">Adresse</p>
                        <p>Bruxelles, 1080 place de la minoterie</p>
                    </div>
                    <div>
                        <p className="text-white">phone</p>
                        <p className="text-vert">+1 333 2358 545</p>
                    </div>
                    <div>
                        <p className="text-white">Email Adress</p>
                        <p className="text-vert">your email</p>
                    </div>
                </div>
            
        </div>
    )
}
