import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo1.jpg';
import {AiOutlineSearch,AiOutlineUser} from 'react-icons/ai';


const Container = styled.div`
width: 100%;
height: 50px;
background-color: black;
display: flex;
align-items: center;
justify-content: space-around;

`
const RightNavbarElement = styled.div`
display: flex;
justify-content: space-around;
gap:25px;

`
const Logo = styled.img`
width: 70px;
height: 50px;
`
const MenuUl = styled.ul`
display: flex;
align-items: center;
list-style: none;
color: white;
font-weight: bold;
`
const MenuLi = styled.li`
margin-right: 20px;
&:hover{
    color: red;
    transition: all 0.2s;
    cursor: pointer;
}
`

const LeftNavbar = styled.div`
justify-content: space-around;
display: flex;
align-items: center;
gap: 20px;

`
const ButtonMain = styled.button`
width: 170px;
background-color: red;
border-radius: 15px;
border: 1px solid red;
height: 40px;
cursor: pointer;
color: white;
font-weight:bold;
&:hover{
    background-color: black;
    border: 1px solid black;
    transition: ease-in 0.2s;
}
`
const Language = styled.h4`
color: white;
`

const SearchIcon = styled(AiOutlineSearch)`

align-items: center;
width:40px;
height: 25px;
color: white;
`
const UserWrapper = styled.div`

display: flex;
border-radius: 30px;
justify-content: center;
align-items: center;
background-color: white;
width: 35px;
height: 35px;
z-index: 2;
position: relative;
`
const User = styled(AiOutlineUser)`
width: 20px;
height: 20px;
color: black;
position: absolute;
z-index: 3;
`

export const Navbar = () => {
  return (
    <Container>
 
 <RightNavbarElement>
<Logo src={logo}/>
<MenuUl>
<MenuLi>Каналы</MenuLi>
<MenuLi>категории</MenuLi>
<MenuLi>Все проекты</MenuLi>
<MenuLi>Онлайн</MenuLi>
<MenuLi>Ещё</MenuLi>

</MenuUl>
</RightNavbarElement>

<LeftNavbar>
<ButtonMain>Оформить подсписку</ButtonMain>
<SearchIcon/>
<Language>RU</Language>
<UserWrapper><User/></UserWrapper>
</LeftNavbar>

    </Container>
  )
}
