import React, { useState } from 'react'

function TodoList() {
  const [activity, setActivity]=useState("")
  const [listdata, setlistdata]=useState([])
  function addacitivity(){
    setlistdata((listdata)=>{
      const updatelist=[...listdata,activity]
      console.log(updatelist);
      setActivity("")
      return updatelist
    })

  }
  function removeactivity(i){
    const updatelistdata=listdata.filter((elem,id)=>{
      return i!=id
    })
    setlistdata(updatelistdata)
  }
  function removeall(){
    setlistdata([])
  }
  return (
    <>
    <div className='container'>
      <div className='header'>TODOLIST</div>
      <input  type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
      <button className='btn' onClick={addacitivity}>Add</button>
      <p className='list_heading'>Here is your List :{")"}</p>
      {listdata!=[] && listdata.map((data, i)=>{
      return(
        <><div className='main-div'>
        <p key={i}>
          <div className='listdata'>{data}</div>
          <div className='btn-post'><button className='btn' onClick={()=>removeactivity(i)}>Remove(-)</button></div>
          
        </p></div>
        </>
      )
    })}

    {listdata.length>=1 && <button className='btn btn2' onClick={removeall}>Remove All</button>}
    
    </div>
   
    </>
  )
}

export default TodoList


