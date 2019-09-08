import React from 'react';
import './Card.scss';

const parseName =(name) => (
    name.charAt(0).toUpperCase() + name.slice(1)
);

const parseNumberID = (n) => {
    if (n < 1000 && n > 100) 
        return n; 
    else if (n < 100 && n > 10) {
        return "0" + n; 
    } else {
        return "00" + n;
    }
}

const Card = ({ id, showModal, name }) => {
    return (
        <div className="card" key={id} onClick={() => showModal(true)}> 
            <div className=" card-text"><span>Nome: {parseName(name)}</span></div>
            <div className=" card-text"><span>Número: {parseNumberID(id)}</span></div>
        </div>
    );
}

export default Card;