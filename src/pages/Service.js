import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'

export default function Service() {
    return (
        <Fragment>
            < Header />
            <section className="service">
                <h1>service</h1>
                < ServiceCard />
            </section>
            < Footer />
        </Fragment>
    )
}
