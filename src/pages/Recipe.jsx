import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import {motion} from 'framer-motion'

function Recipe() {

    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')

    let params = useParams()

    const fetchDetails = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json()
        setDetails(detailData)
    }
    
    useEffect(() =>{
        fetchDetails()
    },[params.id])


    return (
        <DetailWrapper
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration: 0.5, delay: 1}}
            >
                <Button className={activeTab ===  'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab ===  'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === "instructions" && (
                    <motion.div
                        animate={{y: 0, opacity: 1}}
                        initial={{y: 50, opacity: 0}}
                        exit={{y: -50, opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                    </motion.div>
                )}
                {activeTab === "ingredients" && (
                     <motion.div
                        animate={{y: 0, opacity: 1}}
                        initial={{y: 50, opacity: 0}}
                        exit={{y: -50, opacity: 0}}
                        transition={{duration: 0.5}}
                     >
                        <ul>
                            {details.extendedIngredients?.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    img{
        border-radius: 10px;
        object-fit: cover;
        max-height: 400px;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
        padding-left: 20px;
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;
    margin-right: 2rem;
    cursor: pointer;

`

const Info = styled(motion.div)`
    margin-left: 10rem;
`

export default Recipe