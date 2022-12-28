import React from "react"

import banner from "../../assets/home/banner.png"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import styles from "./home.module.scss"


export default function Home(){
    return(
        <>
        <Header />
        <main>
            <section className={styles.main}>
                <Menu />
                <div className={styles.main__img}>
                    <h1>The most complete gallery in space</h1>
                    <img src={banner} alt="Earth in space" />
                </div>
            </section>
        </main>
        </>
    )
}