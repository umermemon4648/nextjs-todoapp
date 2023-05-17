import React from 'react'
import { Todo } from '../models'
import styles from '../style/componentstyle.module.css'
import SingleTodo from './SingleTodo'


interface Props{
  newTodo: Todo[]
  setNewTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({newTodo, setNewTodo}:Props) => {
  return (
    <>
    <div className={styles.todos}>
      {newTodo.map((mapedTodo)=> (
        <SingleTodo 
        singletodo={mapedTodo}
        key = {mapedTodo.id}
        newTodo = {newTodo}
        setNewTodo = {setNewTodo}
        />
      ))}
    </div>
    </>
  )
}

export default TodoList