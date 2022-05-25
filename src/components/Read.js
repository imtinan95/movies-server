// Import Firestore database
import './Firebase'
import db from './Firebase'
import { useState } from 'react'
// import './read.css'

const Read = () => {
  const [info, setInfo] = useState([])

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
    Fetchdata()
  })

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection('list')
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var list = element.list()
          setInfo((arr) => [...arr, list])
        })
      })
    console.log(db.collection('Movies-list').get())
  }
  console.log(db.collection('Movies-list').get())

  // Display the result on the page
  return (
    <div>
      <center>
        <h2>Movies Details</h2>
      </center>

      {info.map((list) => (
        <Frame Accessor={list.Accessor} Name={list.Name} Poster={list.Poster} />
      ))}
    </div>
  )
}

// Define how each display entry will be structured
const Frame = ({ Accessor, Name, Poster }) => {
  console.log(Accessor + ' ' + Name + ' ' + Poster)
  console.log(db.collection('Movies-list').get())
  return (
    <center>
      <div className="div">
        <p>Name : {Name}</p>

        <p>Poster : {Poster}</p>

        <p>Accessor : {Accessor}</p>
      </div>
    </center>
  )
}

export default Read
