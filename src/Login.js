import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { login } from './features/userSlice'
import './Login.css'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
            })
            .catch((error) => alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png" alt="" />
            <form>
                <input
                    placeholder="Full name (required if registering)"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Profile pic URL (optional)"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>

            </form>
            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
