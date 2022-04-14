import { useQuery } from '@apollo/client'
import {GET_MY_PROFILE} from '../utils/queries'
import React from 'react'

export default function Profile() {
  const {loading,error} = useQuery(GET_MY_PROFILE)
  if(loading) return <h1>Loading</h1>
  
  if(error){ 
    console.log(error)
  }

  return (
    <div className='container multi-container'>
         <div>
             <img src={`https://robohash.org/random.png?size=200x200`} alt="pic" />
             <h5>Vinay Vallabhaneni</h5>
         </div>
         <div>Comments Section</div>
         <blockquote>
             <h6>My Comments</h6>
             <p>Vinay</p>
         </blockquote>
    </div>
  )
}
