
export const Container: React.FC<{ children: React.ReactNode }> =({children}) => {
  return (
   <div className="mx-auto w-[95%] md:w-[85%] lg:w-[70%]">{children}</div>
  )
}

