
import { ReactComponent as Logo } from "assets/img/logo.svg";
import Buscador from "pages/buscador";
import Filtros from "pages/filtros";
import Ordenador from "pages/ordenador";
import { useState } from "react";
import styles from "./Cardapio.module.scss";
import Itens from "./itens";

function Cardapio() {
    const [busca, setBusca] = useState("");
    const [ filtro, setFiltro] = useState<number | null >(null);
    const [ordenador, setOrdenador] = useState("");


    return (
        <>

            <main>
                <nav className={styles.menu}>
                    <Logo />
                </nav>
                <header className={styles.header}>
                    <div className={styles.header__text}>
                        A casa do código e da massa
                    </div>
                </header>
                <section className={styles.cardapio}>
                    <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                    <Buscador busca={busca} setBusca={setBusca} />

                    <div className={styles.cardapio__filtros}>
                        <Filtros filtro={filtro} setFiltro={setFiltro} />

                        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                    </div>
                    <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
                </section>
            </main>
        </>
    );
}

export default Cardapio;