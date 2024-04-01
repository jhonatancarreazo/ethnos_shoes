import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'
const ItemList = ({data}) => {
  return (
    <div className='Itemlist'>
      {data.map((el) => (
        <div key={el.id}>
            <Item {...el} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
