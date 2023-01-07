import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Movie = ({singleMovie}) => {
  // async function postData(url = `https://movies-database-gold.vercel.app/watchlists`) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(singleMovie)
  //   });
  //   return response.json()
  // }
    // console.log('singleMovie:', singleMovie)
    const { Id, Title, Year, Rated, Released, Runtime,  Genre, 
      Director, Writer, Actors, Plot,  Language, Country, Awards, Poster,
       Metascore, imdbRating, imdbVotes, imdbID, Type, Response, Images,} = singleMovie

    const router = useRouter()
    const {id} = router.query
  return (
    <div>
      <div>
        <Flex justifyContent="space-around" >
          <div style={{border:"1px solid green", width:"50%"}} ></div>
        </Flex>
          <Container maxW={'7xl'}>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}>
              <Flex>
          <div>
            <Image src={Images[0]} alt="" width="350px" style={{margin:"5px"}} />
            <Image src={Images[1]} alt="" width="350px" style={{margin:"5px"}} />
            <Image src={Images[2]} alt="" width="350px" style={{margin:"5px"}} />
          </div>
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={'header'}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    {Title}
                  </Heading>
                  <Text
                    fontWeight={300}
                    fontSize={'2xl'}>
                    {Genre}
                  </Text>
                </Box>
                
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={'column'}
                  divider={
                    <StackDivider
                    />
                  }>
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <Text
                      color={useColorModeValue('gray.500', 'gray.400')}
                      fontSize={'2xl'}
                      fontWeight={'300'}>
                      {Plot}
                    </Text>
                    <Text fontSize={'lg'}>
                    </Text>
                  </VStack>
                  <Box>
                    <Text
                      fontSize={{ base: '16px', lg: '18px' }}
                      color={useColorModeValue('yellow.500', 'yellow.300')}
                      fontWeight={'500'}
                      textTransform={'uppercase'}
                      mb={'4'}>
                      Details
                    </Text>
                
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                      <List spacing={2}>
                        <ListItem>Released On</ListItem>
                        <ListItem>Awards</ListItem>
                        <ListItem>IMDB Rating</ListItem>
                        <ListItem>Country of Origin</ListItem>
                      </List>
                      <List spacing={2}>
                        <ListItem>{Released}</ListItem>
                        <ListItem>{Awards}</ListItem>
                        <ListItem>{imdbRating}</ListItem>
                        <ListItem>{Country}</ListItem>
                      </List>
                    </SimpleGrid>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{ base: '16px', lg: '18px' }}
                      color={useColorModeValue('yellow.500', 'yellow.300')}
                      fontWeight={'500'}
                      textTransform={'uppercase'}
                      mb={'4'}>
                      Other Details
                    </Text>
                
                    <List spacing={2}>
                      <ListItem><Text as={'span'} fontWeight={'bold'}>Director:</Text>{' '}
                        {Director}
                      </ListItem>
                      <ListItem><Text as={'span'} fontWeight={'bold'}>Writer:</Text>{' '}
                        {Writer}
                      </ListItem>
                      <ListItem><Text as={'span'} fontWeight={'bold'}>Actors:</Text>{' '}
                        {Actors}
                      </ListItem>
                      <ListItem><Text as={'span'} fontWeight={'bold'}>Language:</Text>{' '}
                        {Language}
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
                
                <Button
                // onClick={postData}
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  size={'lg'}
                  py={'7'}
                  bg={useColorModeValue('gray.900', 'gray.50')}
                  color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}>
                  Add to watchlist
                </Button>
              </Stack>
            </SimpleGrid>
          </Container>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
    let res = await fetch(`https://movies-database-gold.vercel.app/movies`)
    let data = await res.json()
    return {
      paths: data.map((el)=>({params: { id: el.id.toString() }})),
      fallback: false, // can also be true or 'blocking'
    }
  }

// export async function getServerSideProps(context) { /* only JS file created if build */
export async function getStaticProps(context) { // HTML file generated
    let id  = context.params.id
    let res = await fetch(`https://movies-database-gold.vercel.app/movies/${id}`)
    let data = await res.json()
    return {
      props: {
        singleMovie:data
      }, // will be passed to the page component as props
    }
  }
export default Movie