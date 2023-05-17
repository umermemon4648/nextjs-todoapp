import React from 'react'
import { MdDone } from 'react-icons/md';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Todo } from '../models'
import styles from '../style/componentstyle.module.css'

interface Props{
    singletodo: Todo
    newTodo: Todo[]
    setNewTodo: React.Dispatch<React.SetStateAction<Todo[]>>
  }

const SingleTodo: React.FC <Props> = ({singletodo, newTodo, setNewTodo}: Props) => {

    const doneHandler = (id:number)=>{
        setNewTodo(newTodo.map((item)=> item.id===id?{...item, isDone: !item.isDone}:item
        ))}

  return (
    <>
    <form className={styles.todosSingle}>

        {singletodo.isDone ? (
            <s className={styles.todosSingleText}>
            {singletodo.todo}
        </s>
        ):
        
        (
            <span className={styles.todosSingleText}>
            {singletodo.todo}
        </span>
        )}
    

        <div>
            <span className={styles.icon}>
      <AiFillEdit />
            </span>

            <span className={styles.icon}>
            <AiFillDelete/>
            </span>

            <span className={styles.icon}>
            <MdDone onClick={()=> doneHandler(singletodo.id)}/>
            </span>

        </div>
    
    
    
    </form>

    </>
  )
}

export default SingleTodo
