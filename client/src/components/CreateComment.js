import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { CREATE_COMMENT } from '../utils/mutations'
import {GET_ALL_Comments} from '../utils/queries'

export default function CreateComment() {
    const [comment,setComment] = useState("")
    const [createComment, {loading,error,data}] =useMutation(CREATE_COMMENT,{
        refetchQueries:[
           GET_ALL_Comments, 'getAllComments' ]
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(comment)
        createComment({
            variables:{
              name:comment
            }
        })
    }
    if(loading) return <h1>Loading</h1>
    if(error){
        console.log(error.message)
    }
    if(data){
      console.log(data)
  }
  return (
    <div className='container multi-container'>
      {
        error && 
        <div className="red card-panel"> {error.message} </div>
      }
       {
        data && 
        <div className="orange card-panel"> {data.comment} </div>
      }
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={comment}
            onChange={e=>setComment(e.target.value)}
            placeholder="Your Comments"
            />
            <button className='btn'>Create</button>
        </form>
    </div>
  ) 
}