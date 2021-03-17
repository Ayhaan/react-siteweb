import React, { Fragment } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
    return (
        <Fragment>
            < Header />
            < Cards />
            <Footer />
        </Fragment>
    )
}
