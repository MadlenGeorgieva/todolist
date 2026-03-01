import styles from './searchField.module.css'
export default function SearchField({   handleInputChange, filter }) {
    return(
        <input 
            className={styles.input}
            type="search"
            placeholder="Search task..." 
            value={filter}
            onChange={handleInputChange}
        />
    )
}