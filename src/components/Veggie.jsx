import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import '@splidejs/react-splide/css'


function Veggie() {

  const [veggie, setVeggie] = useState([])


    useEffect(() => {
        getVeggie()
    }, [])


    const getVeggie = async () => {

		const check = localStorage.getItem('veggie')

		if (check){
            setVeggie(JSON.parse(check))
        }else{
			const api =  await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`)
			const data = await api.json()
			localStorage.setItem('veggie', JSON.stringify(data.recipes))
			setVeggie(data.recipes)
		}
    }
  
    return (
        <div>
            <Wrapper>
                <h3>Escolhas Vegetarianas</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem'
                    }}
                >
                    {veggie.map(recipe => {
                        return(
                            <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={'/recipe/' + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient/>
                                        </Link>
                                    </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}


const Wrapper = styled.div`
    margin: 4rem 0rem;
`
    
const Card = styled.div`
    border-radius: 2rem;
    min-height: 25rem;
    overflow: hidden;
    position: relative;
	cursor: pointer;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
		transition: 0.5s
    }

	&:hover img{
        transform: scale(1.02);
    }

    p{
        position: absolute;
        z-index: 10;
        bottom: 0;
        width: 100%;
        background-color: rgba(256,256,256, 0.8);
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 15%;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default Veggie