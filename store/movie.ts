import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface ResponseValue {
  Search?: Movie[]
  totalResults?: '${number}'
  Error?: string
  Response: 'True' | 'False'
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      // State
      searchText: ''
      // useQuery 사용할 수 있도록 세팅하지 않고 반환값으로 변경
      // movies: [] as Movie[]
    },
    (set, get) => ({
      // Actions
      setSearchText(searchText: string) {
        set({ searchText })
      },
      async fetchMovies(pageParam: number) {
        const { searchText } = get()
        if (searchText.trim().length < 3) return null
        const res = await fetch(
          `https://omdbapi.com/?apikey=7035c60c&s=${searchText}&page=${pageParam}`
        )
        const data: ResponseValue = await res.json()

        // set({ movies: data.Search || [] })

        // useQuery 사용할 수 있도록 세팅하지 않고 반환값으로 변경
        // return data.Search || []
        // 무한스크롤 구현
        return data
      }
    })
  )
)
