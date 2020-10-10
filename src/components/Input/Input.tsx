import React, { CSSProperties } from "react";
import classNames from "classnames";


//接口 
//比如一个函数需要接受一个对象作为参数，那么为了保证传入参数的正确性，我们可以创建一个接口
//这个接口使用 interface 关键词来创建，key， value
//value是我们希望传入的 类型。

interface Props{
    textArea?:boolean,
    maxLength?:number,
    style?:React.CSSProperties,
    placeholder?:string
}

const Input = ({textArea, maxLength}:Props) => {
    return <h1>Hello, word</h1>;
  };

export default Input;