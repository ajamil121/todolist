import React, { useState,useEffect } from 'react'
import "./App.css"
import Input from './components/input'
import List from './components/list';

function App() {
 
  let addList =(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  } 
  const getData =()=>{
    const data = JSON.parse(localStorage.getItem("list"));
    if(data){
      return JSON.parse(localStorage.getItem("list"));}
      else{
             return []
          }
    }
    const [listTodo , setListTodo]= useState([]);
    const[inputArr, setinputArr] = useState(getData());

    useEffect(()=>{
      localStorage.setItem("list",JSON.stringify(inputArr));
    },[inputArr])  

  // const handleComplete=(id)=>{
  //  setListTodo(
  //   listTodo.map((inputText)=>{
  //     if(inputText.id === listTodo.id){
  //       return{...inputText, completed: !inputText.completed}
  //     }
  //     return inputText;
  //   })
  //  )
  // }
  const deleteItem =(key)=>{
    let newList = [...listTodo];
    newList.splice(key,1)
    setListTodo([...newList])
  }

  return (
    <div  className='container'>
    <div className='center-container'>
       <Input addList={addList}/>
       <h1 className="app-heading">lIST ITEMS</h1>
       <hr/>{listTodo.map((listItem,i)=>{
        return(
          <List key={i} index={i} item ={listItem} delete={deleteItem} />
        )
       })}
       
       
    </div>
    </div>

  )
}

export default App