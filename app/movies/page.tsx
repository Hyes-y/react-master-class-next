// http://localhost:3000/movies
export default async function Movies() {
  await new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
  return (
    <>
      <h1>Movies Page!!</h1>
    </>
  )
}
