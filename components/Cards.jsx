import React from 'react'
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'


const Cards = (props) => {
  const { id, Title, Year, Rated, Released, Runtime,  Genre, Director, Writer, Actors, Plot,  Language, Country, Awards, Poster, Metascore, imdbRating, imdbVotes, imdbID, Type, Response, Images,} = props
  
  const router= useRouter()
  const goSingle=()=>{
    console.log('Id:', id)
    router.push(`/${id}`)
  }
  return (
    <div>
        <Card maxW='sm' onClick={goSingle} >
            <Image src={Poster} alt="Poster Not Found" />
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{Title}</Heading>
                <Text>{Genre}</Text>
                <Text>IMDB Rating : {imdbRating}</Text>
                <Text>Released on : {Released}</Text>
              </Stack>
              <Button onClick={goSingle} >View More</Button>
            </CardBody>
        </Card>
    </div>
  )
}

export default Cards

