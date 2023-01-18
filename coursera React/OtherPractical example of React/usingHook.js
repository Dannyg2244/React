import { useState } from "react"

export default function importComponent(){
    const [inputText, setText] = useState("hello")
    function handleChange(e) {
        setText(e.target.value)
    }
    return(
        <div>
            <input value={inputText} onChange={handleChange}/>
            <p>you typed: {inputText}</p>
            <button onClick={() => setText("hello")}>
                reset
            </button>
        </div>
    )
}

import { useState } from 'react'; 

export default function Registration(){
    const [form, setForm] = useState({
        firstName = 'luke'
        lastName = 'jones'
        email = 'lukejones@home.com'
    })
    return (
        <>
        <label>first name:
            <input value={form.firstName}
                onChange={e => { setForm({ ...form, firstName: e.target.value }); } } />
        </label>
        <label>
                last name:
                <input value={form.lastName}
                    onChange={e => { setForm({ ...form, lastName: e.target.value }); } } />
        </label>
        <label>
            Email:
            <input value={form.email} 
            onChange= {e => {setForm({...form, email: e.target.value})}} />
        </label>
        <p>
            {form.firstName} {' '}
            {form.lastName} {' '}
            ({form.email})
        </p>
        </>
    )
}
