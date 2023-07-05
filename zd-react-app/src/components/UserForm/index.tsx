import { ChangeEvent, FormEvent, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

export const UserForm = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    age: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setUser(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const createUser = async () => {
    try {
      const newUser = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      if(!newUser.ok) throw Error("Something wrong with user");

      const newUserJson: User = await newUser.json();
      alert(`Pomyslnie dodano użytkownika: ${newUserJson.firstName}`);
    } catch(e) {
      console.log(e);
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Imie: 
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastName">
        Nazwisko: 
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="firstName">
        Wiek: 
        <input
          type="number"
          id="age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Stwórz usera</button>
    </form>
  );
};
