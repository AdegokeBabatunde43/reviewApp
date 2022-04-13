import React, {useState} from 'react'
import {ReviewContext} from '../ReviewContext'

const ReviewForm = () => {
    const [userId, setUserId]=useState('')
    const [body, setBody]=useState('')
    const[title, setTitle] = useState('')
    const[message,setMessage]= useState('')
    const handleSubmit = (e) =>{
    
        e.preventDefault()
        setUserId('')
        setBody('')
        setTitle('')
        setMessage( body,title,userId)
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter User Id" required value={userId} onChange={(e) =>setUserId(e.target.value)} />
            <input type="text" placeholder="Enter Title"  required value={body} onChange={(e) =>setBody(e.target.value)}/>
            <input type="text" placeholder="Enter Review" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <button>Submit Review</button>
        </form>
        
    </div>
  )
}

export default ReviewForm