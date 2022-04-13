import React from 'react'
import './App.css'
import ReviewForm from './component/ReviewForm'
import ReviewList from './component/ReviewList'
import ReviewProvider from './ReviewContext'

const App = () => {
  return (
    <ReviewProvider>
          <div className="App">
          <ReviewForm />
          </div>
          <ReviewList />

    </ReviewProvider>
  )
}

export default App