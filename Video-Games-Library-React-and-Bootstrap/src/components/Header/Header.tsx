import styles from './Header.module.css';

function Header () {
  return (
    <header className={styles.headerHome}>     
      <img className={styles.img} src="https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beach" />
    </header>
  )
}

export default Header