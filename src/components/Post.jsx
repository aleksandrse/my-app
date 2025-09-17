import React from "react";
import MyButton from "./button/MyButton";
import classes from './button/MyButton.module.css';
export default function Post ({post}){
    return (
        <section className="post">
        <div className="post__wraper">   
          <h1 className="post__title">{post.id}.{post.title}</h1>
          <p className="post__content">{post.content}</p>
        </div>
        <MyButton className={classes.postButton} children={"УДАЛИТЬ"} ></MyButton>
         </section>
    )
} 