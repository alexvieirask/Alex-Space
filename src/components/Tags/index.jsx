import styles from "./tags.module.scss"

export default function Tags(){
    return(
        <div className={styles.tags}>
            <p>Filter by tags:</p>
            <ul className={styles.tags__list}>
                <li>Stars</li>
                <li>Galaxies</li>
                <li>Moon</li>
                <li>Planets</li>
            </ul>
        </div>
    )
}