import React from "react";
import styles from "./Buscador.module.scss";
import {CgSearch} from "react-icons/cg";

interface Props{

    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}


function Buscador({busca, setBusca}: Props) {
    return ( 
        <div className={styles.buscador}>
            <input type="text" value={busca}  onChange={(evento) => setBusca(evento.target.value)} placeholder="Buscar"/>
            <CgSearch size={25} color="#041833"/>
        </div>
     );
}

export default Buscador;



