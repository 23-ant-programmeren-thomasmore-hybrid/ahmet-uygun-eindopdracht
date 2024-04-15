'use client' // Error components must be Client Components

import { useEffect } from 'react'
import {Button} from "@/components/ui/button";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <section className="flex items-center  p-16 bg-gray-50 dark:bg-gray-700">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-3xl dark:text-gray-300">Sorry, Something went wrong.</p>
                    <Button onClick={
                                            // Attempt to recover by trying to re-render the segment
                                            () => reset()
                                        }
                       className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Try Again
                    </Button>
                </div>
            </div>
        </section>

    )
}