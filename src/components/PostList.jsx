import React, { useState } from "react";
import Post from './Post.jsx';
import Title from "./Title.jsx";
import MyButton from "./ui/button/MyButton.jsx";
import MyInput from "./ui/input/MyInput.jsx";
 function PostList (){
  const [datas,setDatas] = useState([{
    id:'1',
    title:'JavaScript',
    content:'Написать метод map самостоятельно'
  },
  {
    id:'2',
    title:'TypeScrirt',
    content:'Изучить в этом году'
  },
  {
    id:'3',
    title:'React!!!',
    content:'Потренироваться!!!!'
  },
 
]);

  const [title, setText ] = useState("");
  const [content, setContent] = useState("");

  const addNewPost =(evt)=>{
    evt.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content};
      setDatas([...datas,newPost])
    console.log(newPost)
  }
return(
    <div>
        <form >
        <MyInput type="text" placeholder="заголовок дела" onChange={(evt)=>setText(evt.target.value)}></MyInput>
        <MyInput type="text" placeholder="описание" onChange={(evt)=>{setContent(evt.target.value)}} ></MyInput>
        <MyButton children={"Добавить дело"} type={"text"} onClick = {addNewPost} ></MyButton>
        <Title children={"СПИСОК ДЕЛ"} ></Title>
         {datas.map(function(data){
           return <Post post={data} key={data.id}></Post>
          })}
        </form>  
    </div>     
)}
export default PostList