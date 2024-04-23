import React from 'react'
import { History, IconNav, UserProfileSettings } from '../Components/UserComponets'

export const User = () => {
  return (
    <div className=''>
    <UserProfileSettings />
    <History/>
    <IconNav/>
    </div>
  )
}
