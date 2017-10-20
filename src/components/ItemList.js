import React from 'react';
import '../styles/common.css'

const Item = (props) => {

    return (
        <div className="item">
            <p className="title">{props.title}</p>   
            <p>{props.description}</p>
            <button>{props.action}</button>
        </div>
    );
}

const ItemList = (props) => {
    return (
        <div>
            {props.items.map(item => <Item {...item} key={item.title}/>)}
        </div>
    )
}

export default ItemList;