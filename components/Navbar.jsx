import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
    // const router = useRouter()
    // const goWatchlist=()=>{
    //     router.push("/watchlist")
    // }
  return (
    <div style={{ display:"flex",  justifyContent:"center",  gap:"50px",  padding:"10px", backgroundColor:"lightblue", color:"darkblue", fontSize:"30px" }}>
        <Link href="/" >Home</Link>
        <Link href="/watchlist" >WatchList</Link>
        {/* <button onClick={goWatchlist} >WatchList</button> */}
    </div>
  )
}

export default Navbar