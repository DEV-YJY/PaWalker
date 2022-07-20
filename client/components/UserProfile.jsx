import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../features/users/usersSlice'
import Header from './Header'

function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const userId = params.id

  useEffect(() => {
    dispatch(fetchUserById(userId))
  }, [dispatch])

  let user = useSelector((state) => {
    // console.log('state: ', state)
    return state.user.user
  })

  const reviews = useSelector((state) => {
    // console.log(state.review.reviews)
    return state.review.reviews
  })

  // returns an array of obj containing review for this user
  const userReview = reviews?.filter((review) => review.reviewee_id === userId)
  // console.log(userReview)

  // add user review

  return (
    <>
      <div>
        <Header />
      </div>
      {user.userProfile && (
        <>
          <h1>User Profile</h1>
          <p>{user.userProfile.name}</p>
          <p>{user.userProfile.bio}</p>
          <p>{user.userProfile.email}</p>
          <p>{user.userProfile.phone_number}</p>
          <p>{user.userProfile.location}</p>
          <p>---------------------------------</p>
          <h2>Pet Profile</h2>
          <div>
            {user.petProfile.map((i) => {
              return (
                <div key={i}>
                  <p>{i.name}</p>
                  <p>{i.breed}</p>
                  <p>{i.age}</p>
                  <p>--------</p>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default UserProfile
