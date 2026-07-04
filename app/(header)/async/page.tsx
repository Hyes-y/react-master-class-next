import { delay } from '@/utils'
import Delay1 from './Delay1'
import Delay2 from './Delay2'
import { Suspense } from 'react'

export default async function Page() {
    await delay(1000)
    return (
        <>
        <h1>Page1</h1>
        <Suspense fallback={<h2>Loading Delay1..</h2>}>
            <Delay1 />
        </Suspense>
        <Suspense fallback={<h2>Loading Delay2..</h2>}>
            <Delay2 />
        </Suspense>
        </>
    )
}