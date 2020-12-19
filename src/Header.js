import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser)
    const dispath = useDispatch()
    const logoutOfApp = () => {
        dispath(logout())
        auth.signOut()
    }




    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar={user.photoUrl} title="Me"
                    onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
