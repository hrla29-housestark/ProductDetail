import React from 'react';
import ListEntry from './ListEntry.jsx';


const List = ({items}) => {
  console.log({items})
  return (
    <div>
      {items.map((item, index) => {
        return <ListEntry item={item} key={index}/>
      })}
    </div>
  )
}

export default List; 