import React, { Fragment } from 'react'
import Img from '../components/Img'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Gallery2() {
    return (
        <Fragment>
            <Header />
            <section className='gallery'>
                <h1>Portrait Gallery 2</h1>
                < Img />
            </section>
            < Footer />
        </Fragment>
    )
}
