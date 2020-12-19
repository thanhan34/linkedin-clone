import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1479658744930-03854858a953?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80" alt="" />
                <Avatar className="sidebar__avatar" src="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/131022939_10218351254361490_7080673836792265944_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=wuYmydjGaQgAX-Rmdj8&_nc_ht=scontent.fbne6-1.fna&oh=16cf6ae33507989312741b5e716db5c4&oe=6001E261" />
                <h2>An Doan</h2>
                <h4>Front End Developer</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,108</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who on post</p>
                    <p className="sidebar__statNumber">1,118</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>
        </div>
    )
}

export default Sidebar
