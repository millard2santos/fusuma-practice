import { useContext, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/ContextProvider"
import { Wrong } from "./Wrong"


const reducer = (form, action) => {
    switch (action.type) {
        case 'email':
            return {
                email: action.next,
                password: form.password,
            }
        case 'password':
            return {
                email: form.email,
                password: action.next
            }
    }
}


export const LogIn = () => {


    const [form, dispatch] = useReducer(reducer, { email: '', password: '' })
    const [modal, setModal] = useState(false)
    const {setAuth} = useContext(Context)
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.clear()
        
        const token = await fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCOZiKCWqYYjx2ZZ02Y9UZmMPbfcbo6h3Q`, {
            method : 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'email': form.email,
                'password': form.password,
                'returnSecureToken' : true,
            })
        })
        

        const data = await token.json()
        console.log(data)
        localStorage.setItem('token', JSON.stringify(data.idToken))

        if(Object.hasOwn(data, 'error')){
            setModal(true)
        }else{
            setAuth(data.idToken)
            data.registered ? navigate(`/cell`) : navigate('/')
        }


      

    }


    return (
        <>
            <h2 className='font-extrabold text-3xl mb-7 leading-9'>Iniciar sesion</h2>
            <form onSubmit={handleSubmit} action="" className='py-8 px-10 flex flex-col gap-6 w-[448px] shadow'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => dispatch({ type: 'email', next: e.target.value })} className='py-[9px] px-[13px] rounded-md border border-[#D1D5DB]' type="email" name='email' id='email' value={form.email}/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => dispatch({ type: 'password', next: e.target.value })} className='py-[9px] px-[13px] rounded-md border border-[#D1D5DB]' type="password" name='password' id='password'  value={form.password} />
                </div>
                <input className='cursor-pointer bg-[#0D9488] rounded-md py-[9px] text-white active:scale-95' type="submit" value='Acceder' />
            </form> 
            {
                modal ? <Wrong setModal={setModal}/> : ''
            }
        </>
    )
}
