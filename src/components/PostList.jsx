import React from "react";
import Post from './Post.jsx';
import datas from "./mock.jsx";
import Title from "./Title.jsx";
import MyButton from "./button/MyButton.jsx"
 function PostList (){
return(
    <div>
        <form >
        <input type="text" placeholder="заголовок дела"></input>
        <input type="text" placeholder="описание"></input>
        <MyButton children={"Добавить дело"} type={"text"}  ></MyButton>
        <Title children={"СПИСОК ДЕЛ"} ></Title>
         {datas.map(function(data){
           return <Post post={data} key={data.id}></Post>
          })}
        </form>  
    </div>     
)}
export default PostList