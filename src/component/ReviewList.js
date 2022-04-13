import {useContext} from 'react'
import ReviewItem from './ReviewItem';
import {ReviewContext} from '../ReviewContext';

const ReviewList = () => {
    const {review}= useContext(ReviewContext)
   if (!review || review.length === 0){
         return 'loading'
   }
  return (
    <div>
    
        <div className="card-container">
          {review.map(({id, body, userId, title})=>(
            <ReviewItem key={id} title={title} body={body} userId={userId} />
          ))}

        </div>

    </div>
  )
}

export default ReviewList