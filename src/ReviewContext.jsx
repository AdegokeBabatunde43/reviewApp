import {createContext, useState, useEffect} from 'react'

const url= "https://jsonplaceholder.typicode.com/posts";
export const ReviewContext = createContext()

const ReviewProvider = ({children}) => {
  const [review, setReview]=useState([])
  const fetchReview= async () => {
    const response= await fetch(url)
    const review= await response.json()
    setReview(review)
  }
  useEffect(()=> {
    fetchReview()
  }, [])

  return (
    <ReviewContext.Provider value={{review}}>
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewProvider