import React from "react";
import "./Tarefa.css";

function Tarefa(props) {
    return (
        <div className="tarefa-wrapper">
            <div className="tarefa">{props.tarefa.descricao}</div>
        </div>
    );
}

export default Tarefa;