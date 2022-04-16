import React from 'react'
import { useNavigate } from 'react-router-dom' 
import NewMeetUpForm from '../components/meetups/NewMeetUpForm'

function NewMeetUpPage() {
  const navigate = useNavigate();

  function addMeetUpHandler(meetupData){
    fetch(
      'https://react-meetup-project-b8332-default-rtdb.firebaseio.com/meetups.json',
       {
   method: 'POST',
   body: JSON.stringify(meetupData),
   headers: {
     'Content-Type': 'application/json'
   }
      }
    ).then (() => {
      navigate("/", { replace: true });

    })

  }
  return (
    <section><h1>Add New Meetup</h1>
    <NewMeetUpForm onAddMeetup = {addMeetUpHandler}/>
    </section>
  )
}

export default NewMeetUpPage