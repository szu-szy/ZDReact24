import { ChangeEvent, useState } from "react"

export const Input = () => {
  const [name, setName] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="name" value={name} onChange={handleName}/>
      <span>{name}</span>
    </div>
  )
}