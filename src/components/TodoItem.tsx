"use client"
import { format } from 'date-fns'

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    createdAt: Date
    updatedAt: Date
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, createdAt, updatedAt, toggleTodo }: TodoItemProps) {
    return (
        <li className="flex gap-1 justify-between items-center">
            <label className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                <input
                    id={id}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={complete}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <span className="font-mono">{format(createdAt, "yyyy-MM-dd HH:mm:ss")} | {format(updatedAt, "HH:mm:ss")}</span>
        </li>
    )
}