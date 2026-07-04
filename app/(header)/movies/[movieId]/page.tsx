// --- Server Component ---
import axios from 'axios'
import Image from 'next/image'

interface Props {
  params: Promise<{ movieId: string }>
}
export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export default async function MovieDetails({ params }: Props) {
  const { movieId } = await params
  const { data: movie } = await axios.get<Movie>(
    `https://omdbapi.com?apikey=${process.env.OMDB_APIKEY}&i=${movieId}`
  )
  return (
    <>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={500}
        height={750}
      />
    </>
  )
}

// --- Client Component ---
// 'use client'
// import { use } from 'react'
// export default function MovieDetails({ params }) {
//   const { movieId } = use(params)
//   return <></>
// }
