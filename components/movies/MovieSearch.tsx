import Button from '@/components/Button'
import { useMovieStore } from '@/store/movie'
import { useState } from 'react'

export default function MovieSearch() {
  const [inputText, setInputText] = useState('')
  // const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  // const fetchMovies = useMovieStore(state => state.fetchMovies)

  function fetchMovies() {
    setSearchText(inputText)
  }

  return (
    <>
      <input
        type="text"
        // value={searchText}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return // 한글로 작성할때 (CKJ? CJK 뭐 문자 입력할때 ) 한글자에 한 키를 작성하는게 아니라서 두번 실행될 수 있으므로 지정
          if (e.key === 'Enter') fetchMovies()
        }}
      />
      <Button onClick={() => fetchMovies()}>검색</Button>
    </>
  )
}
