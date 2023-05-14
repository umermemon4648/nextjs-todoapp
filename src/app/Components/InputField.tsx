
import React from 'react'
import styles from '../style/componentstyle.module.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addTodoHandler: (e: React.FormEvent)=> void
}


const InputField: React.FC<Props> = ({todo, setTodo, addTodoHandler}) => {
  return (
        <>
        <form className={styles.input} onSubmit={addTodoHandler}>
            <input 
            type="text" 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)} 
            placeholder='Enter a task' 
            className={styles.inputBox}
            
            />
            <button className={styles.inputSubmit} type='submit'>GO</button>
        </form>
        </>
  )
}

export default InputField