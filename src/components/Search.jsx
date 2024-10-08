import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'


function Search() {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
        setInput('')
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="" id="" value={input} />
        </FormStyle>
    )
}

const FormStyle = styled.form`
    position: relative;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        font-size: 1.5rem;
        border-radius: 1rem;
        outline: none;
        padding: 1rem 3rem;
        width: 100%;
    }
    svg{
        font-size: 16px !important;
        position: absolute;
        top: 50%;
        left: 0%;
        color: white;
        transform: translate(100%, -50%);
    }
`

export default Search