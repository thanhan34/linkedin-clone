import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase"
function Feed() {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
            ))
    }, [])
    const sendPost = (e) => {
        e.preventDefault()
        db.collection("posts").add({
            name: "An Doan",
            description: "This a text",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        setInput("")
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {
                posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))
            }
            <Post name="An Doan" description="Fullstack Developer" message="Welcome to my LinkedIn Profile" photoUrl="https://scontent.fbne6-1.fna.fbcdn.net/v/t1.0-9/131022939_10218351254361490_7080673836792265944_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=wuYmydjGaQgAX-Rmdj8&_nc_ht=scontent.fbne6-1.fna&oh=16cf6ae33507989312741b5e716db5c4&oe=6001E261" />
        </div>
    )
}

export default Feed
