import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { SiAeromexico } from "react-icons/si";
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from "styled-components"
import {NavLink} from 'react-router-dom'
import { GiChocolateBar } from "react-icons/gi";



function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
        <SLink to={'/cuisine/Mexican'}>
            <SiAeromexico/>
            <h4>Mexican</h4>
        </SLink>
        <SLink to={'/type/dessert'}>
            <GiChocolateBar/>
            <h4>Dessert</h4>
        </SLink>

    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    transition: transform 0.3s ease, transform 0.5s ease-in-out;

    h4{
        margin-top: 5px;
        color: white;
        font-size: 0.8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }
    &:hover{
        background: linear-gradient(to right,#f7cbb0,#dd6878);
        transform: translateY(-5px) scale(0.8);
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`

const CategoryItem = styled.div`
    background-color: green;
    color: white;
    border-radius: 50%;

    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h4{
        color: white;
        font-size: 0.7rem;
    }


`

export default Category