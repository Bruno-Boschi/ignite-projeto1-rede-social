import styles from './Header.module.css'

import ignitelogo from '../assets/logo.svg'

console.log(ignitelogo);

export function Header() {
    return (
    <header className={ styles.header }>
    <img src={ignitelogo} alt="LogoTipo do ignite" />
    </header>
);
}