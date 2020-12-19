import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
function Header() {

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
                <HeaderOption avatar="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/131022939_10218351254361490_7080673836792265944_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=wuYmydjGaQgAX-Rmdj8&_nc_ht=scontent.fbne6-1.fna&oh=16cf6ae33507989312741b5e716db5c4&oe=6001E261" title="Me"
                    onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
