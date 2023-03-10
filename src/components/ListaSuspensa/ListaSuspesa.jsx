import React from 'react'
import './ListaSuspesa.css'

function ListaSuspesa(props) {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={(event) => props.alteredState(event.target.value)} required={props.required} value={props.value}>
            <option value={('')}></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspesa;