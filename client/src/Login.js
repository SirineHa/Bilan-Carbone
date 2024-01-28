import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate('/');

    axios.defaults.withCredentials = true;
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/')
            }else {
                alert(res.data.Message)
            }
        })
        .catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                        onChange = {e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control'
                        onChange = {e => setValues({...values, password:e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    )
}
