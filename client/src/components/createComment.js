import React,{useState} from 'react'

export default function Comment() {
    const [comment,setComment] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(comment)
    }
  return (
    <div className='container multi-container'>
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

