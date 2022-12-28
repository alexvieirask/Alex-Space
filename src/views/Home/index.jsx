import React from "react"


import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Banner from "../../components/Banner"
import Galery from "../../components/Galery"
import Footer from "../../components/Footer"
import styles from "./home.module.scss"



export default function Home(){
    return(
        <>
        <Header />
        <main>
            <section className={styles.main}>
                <Menu />
                <Banner />
            </section>
        </main>
        <div className={styles.galery}>
            <Galery/>
        </div>
        <Footer/>
        </>
    )
}