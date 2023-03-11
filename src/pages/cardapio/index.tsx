

import Buscador from "pages/buscador";
import Filtros from "pages/filtros";
import Ordenador from "pages/ordenador";
import { useState } from "react";
import styles from "./Cardapio.module.scss";
import Itens from "./itens";
import stylesTema from "../../styles/Tema.module.scss";
function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");


    return (
  
        <section className={styles.cardapio}>
            <h3 className={stylesTema.titulo}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} />

            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />

                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>

    );
}

export default Cardapio;