"use client"
import Image from 'next/image'
// import styles from './page.module.css'
import style from '../app/style/taskify.module.css'
import InputField from './Components/InputField'
import React ,{ useState } from 'react'


// let name : string = "Umer"
// let age : number|string = "22"
// let isStudent : boolean= false
// let skills : string[] = ['HTML', 'CSS', "JS"] 

// // Creating an object
// interface Person1 {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: string;
// }

// const person : Person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   address: "123 Main St, Anytown USA"
// }

// function sayHello (name:string):void{
//   console.log(`Hello, ${name}!`)
// }
// sayHello("Umer Memon")


// let a:unknown = ['HTML', 'CSS', "JS"] 

// // extending type
// type webTech = {
//   layout: string,
//   styling: string[],
//   scriptingLanguage: string
// }
// type softwareTech = webTech &{
//   appDevelopment: string[],
// }
// let app: softwareTech = {
//   layout: "HTML",
//   styling: ["CSS", "Tailwind CSS", "Material UI"],
//   scriptingLanguage: "JS",
//   appDevelopment : ["React Native", "Flutter"]
// }



// // extending interface
// interface Person{
//   name: string,
//   age: number
// }
// interface Gender extends Person{
//   gender: string,
//   pronoun: string
// }

// const indentity: Gender = {
//   name: "Muhammad Umer",
//   age: 21,
//   gender: "Male",
//   pronoun: "He"
// }

interface Todo{
  id: number,
  todo: string,
  isDone: boolean
}

const Home: React.FC = () => {
  const [todo, setTodo] = useState <string> ("")

  const [newTodo, setNewTodo] = useState <Todo[]> ([])

  const addTodoHandler = (e: React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setNewTodo([...newTodo, {id:Date.now(), todo, isDone:false}])
      setTodo("")
    }
  }
  console.log(newTodo)
  return (
    <>
   
<div className={style.App}>
  <span className={style.heading}>Taskify</span>
  <InputField todo ={todo} setTodo={setTodo} addTodoHandler={addTodoHandler} />

</div>


    </>
  )
}

export default Home
