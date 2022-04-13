// import {useContext} from 'react'
// import {ReviewContext} from '../ReviewContext'

const ReviewItem = ({userId, body, title}) => {
  
  return (
    <div>
        <div className="App">
        <h6>{body}</h6>
        <h2>{userId}</h2>
        <h5>{title}</h5>
        </div>
    </div>
  )
}

export default ReviewItem