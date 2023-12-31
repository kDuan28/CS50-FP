import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Popular() {
  return (
    <Container>
        <h2>Popular Items</h2>

        <Cards>
            <Card 
                src='/images/cs50-duck.webp'
                name='CS50 Rubber Duck'
                price='$3.99'
            />
            <Card 
                src='/images/cs50-pen.webp'
                name='CS50 Pen'
                price='$4.99'
            />
            <Card 
                src='/images/cs50-glasses.jpg'
                name='CS50 Sunglasses'
                price='$9.99'
            />
        </Cards>
    </Container>
  )
}

export default Popular

const Container = styled.div`
    padding: 12px;
`

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
`