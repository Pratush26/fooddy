'use client'
 
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className="flex gap-2 flex-col items-center text-center justify-center w-full my-10">
      <div className="w-full max-w-sm h-40 relative">
                <Image
                  src={'/error.png'}
                  fill
                  alt="error image"
                  className="object-contain"
                />
              </div>
      <h2 className="text-3xl font-semibold animate-pulse">Something went wrong!</h2>
      <button onClick={() => reset()} className="btn btn-primary trns rounded-md">Try again</button>
    </main>
  )
}