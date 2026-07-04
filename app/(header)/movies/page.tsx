'use client'
import MovieList from '@/components/movies/MovieList'
import MovieSearch from '@/components/movies/MovieSearch'

export default function Movies() {
  return (
    <>
      <h1>Movies Page!!</h1>
      <MovieSearch />
      <MovieList />
    </>
  )
}
