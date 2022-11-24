import React from 'react'

const Get = () => {
    const toGetData = () =>{
        const url ="https://gorest.co.in/public/v1/todos"
        
       const options ={
         method:'Get',
       }
       fetch(url,options)
       .then(res => res.json())
       .then(res => console.log(res))
       .catch(err => console.log(err))
    }
    toGetData();
  return (
    <center>
      <button style={{backgroundColor:'pink',borderRadius:"12px"}} onClick={toGetData}>click to get data</button>
    </center>
  )
}

export default Get;


