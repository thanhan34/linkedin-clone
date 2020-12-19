import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser, userSlice } from './features/userSlice'
import './HeaderOption.css'
function HeaderOption({ title, Icon, onClick, avatar }) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {
                avatar && (
                    <Avatar className="headerOption__icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>
                )
            }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
