import { Link } from 'react-router'
import { useMovieStore } from '@/store/movie'
import { useInfiniteQuery } from '@tanstack/react-query'
// import { useQuery } from '@tanstack/react-query'
import type { ResponseValue } from '@/store/movie'
import { Fragment } from 'react'
import Button from '@/components/Button'
import { useOnInView } from 'react-intersection-observer'

export default function MovieList() {
  // const movies = useMovieStore(state => state.movies)
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } =
    useInfiniteQuery<ResponseValue | null>({
      queryKey: ['movies', searchText],
      queryFn: ({ pageParam }) => {
        return fetchMovies(pageParam as number)
      },
      staleTime: 1000 * 60 * 60 * 2, // ms
      enabled: !!searchText,
      getNextPageParam: (lastPage, pages) => {
        // 총 개수 '812' => 페이지는 10으로 나누고 올림
        if (lastPage) {
          const maxPage = Math.ceil(Number(lastPage.totalResults) / 10)
          if (pages.length < maxPage) {
            return pages.length + 1
          }
        }
        return null
      },
      initialPageParam: 1
    })

  const ref = useOnInView(inView => {
    if (inView) fetchNextPage()
  })

  return (
    <>
      <ul className="flex flex-wrap gap-3">
        {data?.pages.map((page, idx) => {
          return (
            <Fragment key={idx}>
              {page?.Search?.map(movie => {
                return (
                  <li key={movie.imdbID}>
                    <Link to={`/movies/${movie.imdbID}`}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                      {movie.Title}
                    </Link>
                  </li>
                )
              })}
            </Fragment>
          )
        })}
      </ul>
      <div className={hasNextPage && !isFetching ? 'block' : 'hidden'}>
        <Button
          ref={ref}
          loading={isFetchingNextPage}
          onClick={() => {
            fetchNextPage()
          }}>
          더보기!
        </Button>
      </div>
    </>
  )
}
