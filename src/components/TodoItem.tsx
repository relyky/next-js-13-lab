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

export function TodoItem(props: TodoItemProps) {
    return (
        <li className="flex gap-1 justify-between items-center">
            <label className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                <input
                    id={props.id}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={props.complete}
                    onChange={e => props.toggleTodo(props.id, e.target.checked)}
                />
                {props.title}
            </label>
            <span className="font-mono">{format(props.createdAt, "yyyy-MM-dd HH:mm:ss")} | {format(props.updatedAt, "HH:mm:ss")}</span>
        </li>
    )
}