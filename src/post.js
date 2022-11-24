import React from 'react'
//import { useEffect } from 'react'
const Post = () => {
   // useEffect(()=>{
        const toPostData = ()=>{
            const url =" https://admin.srkprojects.com/web/api/client/v1/contact-us/"
            const data ={"Email" : "email",
                       "Message" : "Text",
                       "Name" : "Character"}
        
           const options ={
             method:'Post',
             headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
             }
             ,body:data 
           }
           fetch(url,options)
           .then(res => res.json())
           .then(res => console.log(res))
           .catch(err => console.log(err))
        }
        toPostData();
        
 //   },[])
  return (
    <center>
      <button style={{backgroundColor:'pink',borderRadius:"12px"}} onClick={toPostData}>click to Post</button>
    </center>
  )
}

export default Post



