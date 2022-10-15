import React from "react";

const UserList = () => {
    return (
        <div>
            userlist
        </div>
    )
}

export default UserList
export {}

/*
interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

const UserList: React.FC<IProps> = ({ user }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} años</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }
    
    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List*/