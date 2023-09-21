import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 120px;
background-color: black;
display: flex;
justify-content: center;
color: white;
align-items: center;

`
const LinksUl = styled.ul`
margin-right: 10px;
list-style: none;
display: flex;
flex-direction: column;
font-weight: bold;

`
const LinksLi = styled.li`

`

export const Footer = () => {
  return (
    <Container>
<LinksUl>
<LinksLi>Information</LinksLi>
<LinksLi>Information</LinksLi>
<LinksLi>Information</LinksLi>

</LinksUl>
<LinksUl>
<LinksLi>Information</LinksLi>
<LinksLi>Information</LinksLi>
<LinksLi>Information</LinksLi>

</LinksUl>
    </Container>
  )
}
