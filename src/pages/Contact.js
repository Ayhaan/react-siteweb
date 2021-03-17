import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Formulaire from '../components/Formulaire'

export default function Contact() {
    return (
        <Fragment>
            < Header />
            <section className="contact">
                <h1>Contact</h1>
                < Formulaire />
            </section>
            < Footer />
        </Fragment>
    )
}
