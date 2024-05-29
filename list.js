import React from 'react'

function List(props) {
  
    return (
   <li className="list-items">
   {props.item}
   <span className='icons'>
   <i className="fa-solid fa-trash icon-delete"
   onClick={e=>{
    props.delete(props.index)
   }}
  
   ></i>
   </span>
   <button className='button-complete task-button'>
   <i className="fa-solid fa-check"></i>
   </button>
   </li>
  )
}

export default List
