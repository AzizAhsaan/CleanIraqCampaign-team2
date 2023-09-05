import { MouseEventHandler } from "react";

export default function  OutlinedButton ({text,onClick}:{text:string,onClick:MouseEventHandler<HTMLButtonElement>}){
  return (
    <button 
    onClick={onClick}
    className="bg-transparent text-secondary border border-secondary font-bold px-2 md:px-4 rounded-md h-fit my-auto py-1 text-md lg:text-lg w-fit">
        {text}
    </button>
  )
}
