import React, {useState} from 'react';
import axios from 'axios'
import './Login.css'
import {useHistory} from 'react-router-dom'

const Connection =()=> {

    let history = useHistory()

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [errorPassword, setErrorPassword] = useState(null)

    const queryData = (e) => {
        e.preventDefault()

        if ( user.password.length >= 4) {
            axios.post('http://localhost:8080/auth', user)
            .then(res => {
                localStorage.setItem('userToken', res.data.token)
                // localStorage.setItem('userData', res.data.data)
            })
            .then(res => {
                history.push('/form')
            })
        }
        else {
            setErrorPassword('Adresse E-mail ou mot de passe incorrect')
        }
    }
      

    return(
        <div className="containerRegister">

            <h1 className='titleRegister' > TEAM PARTNER </h1>
        
        <div className='Form'>
         <form onSubmit={queryData}>
            
            <input className="at" placeholder="E-mail" name='email' value={user.email} required type='text' onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input className="lock" placeholder="Mot de passe" name='password' value={user.password} required type='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <p>{errorPassword}</p>
         
         <button className='btnRegister' type='submit'>
             Se connecter
        </button>

     </form>

     </div>
    
    </div>     
    )
}

export default Connection