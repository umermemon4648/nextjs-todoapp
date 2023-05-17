import React, {useState, useEffect, useRef} from 'react'
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
    const inputRef = useRef <HTMLInputElement>(null)
  const [edit, setEdit] = useState <boolean> (false)
  const [editTodo, setEditTodo] = useState <string> (singletodo.todo)

    const doneButtonHandler = (id:number)=>{
        setNewTodo(newTodo.map((item)=> item.id===id?{...item, isDone: !item.isDone}:item
        ))
    }
        
        const deleteButtonHandler = (id:number)=>{
            setNewTodo(newTodo.filter((item)=> item.id!==id
            ))
        }



        const editButtonHandler = (id:number)=>{
            if(!edit && !singletodo.isDone){
                setEdit(!edit)

            }
        }

        const editHandler = (e: React.FormEvent,id:number)=>{
            e.preventDefault()
            setNewTodo(newTodo.map((item)=> (
                item.id ===id ? {...item, todo:editTodo} : item
            )
             ));
             setEdit(false)

        }

        useEffect(() => {
         inputRef.current?.focus()
        }, [edit])
        

  return (
    <>
    <form className={styles.todosSingle} onSubmit={(e)=>editHandler(e,singletodo.id)}>

        {edit ?
        (
            <input type="text" 
            value={editTodo} 
            onChange={(e)=> setEditTodo(e.target.value)}
            className={styles.todosSingleText}
            ref={inputRef}
            />
        ):
    (
        singletodo.isDone ? (
            <s className={styles.todosSingleText}>
            {singletodo.todo}
        </s>
        ):
        
        (
            <span className={styles.todosSingleText}>
            {singletodo.todo}
        </span>
        )
    )
}
       
    

        <div>
            <span className={styles.icon}>
      <AiFillEdit onClick={()=> editButtonHandler(singletodo.id)} />
            </span>

            <span className={styles.icon}>
            <AiFillDelete onClick={()=> deleteButtonHandler(singletodo.id)} />
            </span>

            <span className={styles.icon}>
            <MdDone onClick={()=> doneButtonHandler(singletodo.id)}/>
            </span>

        </div>
    
    
    
    </form>

    </>
  )
}

export default SingleTodo
