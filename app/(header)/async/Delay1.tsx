import { delay } from '@/utils'

export default async function Delay1() {
    await delay(3000)
    return (
        <>
        <h1>Delay1</h1>
        </>
    )
}