import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'
import { SimpleGrid } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({movies}) {
  // console.log('movies:', movies)
  return (
    <>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <SimpleGrid gap="50px" templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {movies.map((el)=>
            <Cards key={el.id} {...el} />
          )}
        </SimpleGrid>
      </div>
    </>
  )
}
export async function getStaticProps(context) {
  let res = await fetch("https://movies-database-gold.vercel.app/movies")
  let data = await res.json()
  return {
    props: {
      movies:data
    }, // will be passed to the page component as props
  }
}