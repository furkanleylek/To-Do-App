'use client'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useCrudContext } from '@/components/context';
import { setCookie } from 'cookies-next'


function Login({ setLogin }) {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false)
    const [error, setError] = useState('');
    const { isLogin, setIsLogin } = useCrudContext()

    const router = useRouter()
    console.log("isLogin:", isLogin)

    async function handleSubmit(e) {

        e.preventDefault()
        try {
            const response = await fetch(`/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await response.json();
            console.log(data);

            // do something with the response, such as displaying a success message
        } catch (error) {
            console.error(error);
        }
        if (register) {
            const newUserId = Math.random().toString(36).substring(7);
            const newUser = {
                key: newUserId,
                id: newUserId,
                name: name,
                email: email,
                password: password
            };
            if (!(users.every((e) => { return e.email !== email }))) {
                setError('This e-mail has already been registered.');
            } else {
                setError('');
                const newUsers = [...users, newUser]
                localStorage.setItem('users', JSON.stringify(newUsers))
                setCookie("currentId", newUser.id)
                setUsers(newUsers)
                setEmail('')
                setName('')
                setPassword('')
                setIsLogin(true)
            }
        } else {
            const usersList = JSON.parse(localStorage.getItem('users')) || [];
            if (usersList.length == 0) {
                setError(' This email is not registered.');
            }
            usersList.map((user) => {
                if (user.email == email && user.password == password) {
                    console.log("user:", user.name)
                    setCookie("currentId", user.id)
                    setIsLogin(true)
                } else if (user.email !== email) {
                    setError(' This email is not registered.');
                }
                else {
                    setError('Email or password is incorrect ! ');
                }
            })

            // Formu temizle
            setName('')
            setEmail('');
            setPassword('');
        }
    }

    useEffect(() => {
        if (isLogin) {
            router.push("/")
        }
    }, [isLogin])

    useEffect(() => {
        const emailId = document.getElementById('email')
        const emailSpanId = document.getElementById('emailSpan')
        const passwordId = document.getElementById('password')
        const passwordSpanId = document.getElementById('telSpan')
        const nameId = document.getElementById('name')
        const nameSpanId = document.getElementById('nameSpan')

        emailId.addEventListener("focusin", () => {
            emailSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; opacity:100; border-left:1px solid #0EA5E9 ; border-right:1px solid #0EA5E9 ; border-radius:2px; font-style:italic ; background:#0EA5E9 ; color:white;'
        })
        emailId.addEventListener("focusout", () => {
            if (emailId.value.length == 0) {
                emailSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
            }
        })
        passwordId.addEventListener("focusin", () => {
            passwordSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; background:#0EA5E9 ; color:white; opacity:100; border-left:1px solid #0EA5E9 ; border-right:1px solid #0EA5E9 ; border-radius:2px; font-style:italic ;'
        })
        passwordId.addEventListener("focusout", () => {
            if (passwordId.value.length == 0) {
                passwordSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
            }
        })
        if (register) {
            nameId.addEventListener("focusin", () => {
                nameSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; opacity:100; border-left:1px solid #0EA5E9 ; border-right:1px solid #0EA5E9 ; border-radius:2px; font-style:italic ; background:#0EA5E9 ; color:white;'
            })
            nameId.addEventListener("focusout", () => {
                if (nameId.value.length == 0) {
                    nameSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
                }
            })
        }
    }, [register])


    return (
        <div className='flex flex-col flex-1 w-full h-full overflow-y-hidden'>
            <AiOutlineClose className='text-4xl m-4 hover:scale-110 text-red self-end transition-all cursor-pointer ' onClick={() => setLogin(false)} />
            <div className="flex flex-col justify-center items-center h-full">
                <FaCheck className='text-navBlue text-4xl lg:text-6xl ' />
                <form className="flex flex-col items-center justify-between w-full max-w-md pt-10 rounded gap-4 " onSubmit={handleSubmit}>
                    {error && <p className='text-metal font-bold border-b-2 border-lightGrey pb-1'>{error}</p>}
                    {register && (
                        <div className='relative w-[250px] h-full'>
                            <input
                                className="shadow-lg  border-4 rounded w-full py-2 px-3 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:shadow-outline p-4 border-greyWhite outline-none "
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className='absolute p-[12px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30' id='nameSpan'>Name</span>
                        </div>
                    )}
                    <div className='relative w-[250px] h-full'>
                        <input
                            className="shadow-lg  border-4 rounded w-full py-2 px-3 text-gray-700 mb-3 appearance-none leading-tight focus:outline-none focus:shadow-outline p-4 border-greyWhite outline-none "
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className='absolute p-[12px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30' id='emailSpan'>Email</span>
                    </div>
                    <div className='relative w-[250px] h-full mb-4'>
                        <input
                            className="shadow-lg appearance-none border-4 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  p-4  border-greyWhite  outline-none "
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='absolute p-[12px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30 ' id='telSpan'>Password</span>
                    </div>
                    <button disabled={(email.length && password.length) <= 0 ? true : false} className="bg-navBlue hover:scale-105 transition-all text-white font-bold py-2 w-40 rounded focus:outline-none focus:shadow-outline disabled:opacity-70 disabled:cursor-not-allowed" type="submit" >
                        {register ? 'Register' : 'Login'}
                    </button>
                    <button className="bg-metal hover:scale-105 transition-all text-white font-bold py-2 w-40 rounded focus:outline-none focus:shadow-outline" >
                        Demo App
                    </button>
                    {register == true
                        ?
                        <span className='text-grey font-bold'>Already a member ?
                            <span className='text-navBlue cursor-pointer opacity-70 hover:opacity-100' onClick={() => setRegister(() => false)}> Login</span>
                        </span>
                        :
                        <span className='text-grey font-bold'>Not a member yet ?
                            <span className='text-navBlue cursor-pointer opacity-70 hover:opacity-100' onClick={() => setRegister(() => true)}> Register</span>
                        </span>}
                </form>
            </div>
        </div>
    )
}

export default Login