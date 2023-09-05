import { type } from "os";
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export default function MainButton({ text, onClick,isSubmit }: {
  text: string;
  isSubmit?:boolean
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="bg-secondary text-light font-bold px-2 md:px-4 rounded-md h-fit my-auto py-1 text-md md:text-lg w-fit"
      onClick={onClick}
      type={isSubmit?"submit":"button"}
    >
      {text}
    </button>
  )
}
