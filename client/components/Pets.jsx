import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToHistoryPet, fetchAllPets } from '../features/users/petsSlice'

function Pets() {
  const petsDisplay = useSelector((state) => {
    console.log(state)
    return state.pet
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [])

  const addHistory = async (userId) => {
    // await setHistoryList(historyList.push(userId))
    dispatch(addToHistoryPet(userId))
  }

  return (
    <main className=''>
      <Link to={'/users/myProfile'}>My Profile</Link>

      {petsDisplay.pets.map((pets, i) => {
        return (
          <section key={i} className=''>
            <div>
              <img className='' src={pets.img} alt={pets.name} />
            </div>
            <div>
              <h3 className=''>{pets.name}</h3>
            </div>
            <div>
              <h3 className=''>{pets.location}</h3>
            </div>
            <button className='border border-black' onClick={() => addHistory(pets.id)}>
              Add to History
            </button>
            <p className={petsDisplay.history.includes(pets.id) ? '' : 'invisible'}>
              {pets.name} has been added to your history.
            </p>
          </section>
        )
      })}
    </main>
  )
}

export default Pets
