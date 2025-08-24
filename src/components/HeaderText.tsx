import type React from "react"

interface Props {
  children: React.ReactNode;
}

const HeaderText = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-family-yekan-black text-3xl">
      {children}    
    </h1>
  )
}

export default HeaderText