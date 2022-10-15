import React from 'react'
import {User} from './User'

interface Props {
    user:User
}

export const UserItem = ({user}: Props) => {
    return (
        /*<div>
          <h1>{user.name}</h1>
          <p>{user.password}</p>
          <p>{user.email}</p>
          <p>{user._id}</p>
          <h1>---</h1>
        </div>*/
        <li className="List">
                <div className="List-header">
                    
                    <h2>{user.name}</h2>
                </div>
                <p>{user.email} años</p>
                <p className="List-note">{user._id}</p>
            </li>
    )
}
export {}
export default UserItem