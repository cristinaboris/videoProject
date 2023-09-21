import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/dataSlice';
import {ProductList }from '../ProductList/ProductList'

const Container = styled.div`
width: 87%;
background-color: white;
height: 100vh;
margin: 0 auto;
padding: 60px 50px;
@media only screen and (max-width:400px){
  height: 400vh;
}
`
const SectionFilter = styled.div`
display: flex;
justify-content: space-between;
`
const Title = styled.h3`
font-weight: bold;
color: black;
font-size: 30px;
`
const FilterZone = styled.ul`
list-style: none;
display: flex;
width: 40%;
height:60px;
background-color: transparent;
border: 1px solid gray;
border-radius: 30px;
justify-content: center;
align-items: center;
text-align: center;
`

const FilterElements = styled.li`
flex:1;
border-right: 2px solid gray;

` 

const Header = () => {

const {data} = useSelector((state) => state.dataMovies)

  const dispatch = useDispatch()

useEffect(() =>{
  dispatch(fetchMovies())
},[])

  return (
    <Container>
<SectionFilter>

<Title>Магазин фильмов и сериалов</Title>
<FilterZone>
<FilterElements>по дате</FilterElements>
<FilterElements>популярные</FilterElements>
<FilterElements>по алфавиту</FilterElements>
</FilterZone>
</SectionFilter>
<ProductList data={data}/>
    </Container>
  )
}

export default Header