import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToHistoryPet, fetchAllPets } from '../features/users/petsSlice'
// import { fetchUserById } from '../features/users/usersSlice'
import PetByLocation from './PetByLocation'
import Header from './Header'
import ModalOwnerView from './ModalOwnerView'

function Pets() {
  const dispatch = useDispatch()
  const petsDisplay = useSelector((state) => {
    // console.log(state)
    return state.pet
  })

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])

  const addHistory = async (userId) => {
    // await setHistoryList(historyList.push(userId))
    dispatch(addToHistoryPet(userId))
  }

  // const OwnerProfile = async (userId) => {
  //   // await setHistoryList(historyList.push(userId))
  //   dispatch(addToHistoryPet(userId))
  // }



  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='w-1/3 mb-12 text-center m-auto'>
      <PetByLocation />
     
        </div>
      <main className='max-w-6xl mx-auto text-center mb-20 grid grid-cols-3 gap-5'>
      
      
        {petsDisplay.pets.map((pets, i) => {
          return (
            <div key={i} className='px-2 py-2 rounded-lg mx-auto'>
              <img
                className='rounded-lg object-cover h-48 w-64'
                src={pets.img}
                alt={pets.name}
              />
              <h3 className="text-blue-500 font-semibold">{pets.name}</h3>
              <h3 className="">{pets.location}</h3>

              <div>
              {/* <ModalOwnerView /> */}
              </div>
               
             
              {/* <button
                className="w-20 m-2 cursor-pointer uppercase h-9 bg-yellow-500 rounded-3xl text-white text-xs font-semibold  shadow-xl hover:bg-yellow-600 hover:text-black hover:translate-y-px"
                onClick={() => getOwnerProfile(pets.id)}
              >
                Owner Profile
              </button> */}
              <button
                className="w-20 cursor-pointer uppercase h-9 bg-yellow-500 rounded-3xl text-white text-xs font-semibold  shadow-xl hover:bg-yellow-600 hover:text-black hover:translate-y-px"
                onClick={() => addHistory(pets.id)}
              >
                Add History
              </button>
              <p className={petsDisplay.history.includes(pets.id) ? '' : 'invisible'}>
                {pets.name} has been added to your history.
              </p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Pets
