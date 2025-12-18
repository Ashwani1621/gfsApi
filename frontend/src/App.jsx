import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [gfs, setGf] = useState([])
  useEffect(()=>{
    axios('http://localhost:3000/gf') 
      .then((response)=> response.data)
      .then((data)=> setGf(data))
  },[])
  console.log(gfs)
  return (
    <>
      GF API
      {gfs.map((gf)=>{
        return <li key={gf.id}>{gf.name}</li>
      })}
    </>
  )
}