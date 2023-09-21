import React from 'react'
import styled from 'styled-components'


const Title = styled.h2`
width: 40px;
text-align:center;
width: 100%;
`
const Wrraper = styled.div`
padding: 60px 0;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

`
const Image  = styled.img`
width: 300px;
height: 300px
`

const RunTime = styled.h3`
`
const Year = styled.h3`
`
const Wrraper1 = styled.div`
width: 400px;
height:400px;
margin-bottom:40px;
text-align:center;
cursor: pointer;
border: 1px solid gray;


`

export const ProductList = ({data}) => {
  console.log(data, 'right')
  return (
    <Wrraper>

      {
        data.map((movie) => (
          <Wrraper1 key={movie.id}>
   <Image src={movie.Poster}/>
   <Title>{movie.Title} </Title>
   <Year>{movie.Year}</Year>
   <RunTime>{movie.Runtime}</RunTime>
</Wrraper1>
        ))}
    </Wrraper>
  )
}
