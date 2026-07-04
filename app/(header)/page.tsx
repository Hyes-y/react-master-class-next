'use client'
import { fetchMovies } from '@/serverActions/movie'
export default function Home() {
  return (
    <>
      <h1 onClick={() => { fetchMovies() }}>Home Page!!</h1>
    </>
  )
}