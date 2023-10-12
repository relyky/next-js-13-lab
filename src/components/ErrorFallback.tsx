"use client"
import { useErrorBoundary } from "react-error-boundary"

type ErrorFallbackProps = {
    error: Error
}

export function ErrorFallback(props: ErrorFallbackProps) {
    const { resetBoundary } = useErrorBoundary();

    return (
        <div role="alert" className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
            <p className="font-medium text-2xl">出現錯誤！</p>
            <p>{props.error.message}</p>
            <button
                onClick={resetBoundary}
                className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
                Try again
            </button>
        </div>
    )
}