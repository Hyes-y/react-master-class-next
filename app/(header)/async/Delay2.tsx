import { delay } from '@/utils'

export default async function Delay2() {
    await delay(2000)
    return (
        <>
        <h1>Delay2</h1>
        </>
    )
}