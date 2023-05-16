import React from 'react'
import { Todo } from '../models'
interface Props{
  newTodo: Todo[]
  setNewTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({newTodo, setNewTodo}:Props) => {
  return (
    <>
    <div className="todo">
      {newTodo.map((mapedTodo)=> (
        <li>{mapedTodo.todo}</li>
      ))}
    </div>
    </>
  )
}

export default TodoList