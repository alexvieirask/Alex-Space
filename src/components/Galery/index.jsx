import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./galery.module.scss"
import pictures from "./pictures.json"



export default function Galery(){
    return(
        <section className={styles.galery}>
            <h2>Browse the gallery</h2>
            <Tags/>
            <Cards itens={pictures} styles = {styles} />
        </section>
    )
}