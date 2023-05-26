import React from "react";
// state -> detect changes in the value of variale in the entire webpage

//onclikc, onChange , onScroll, onFoucs
import { useState } from "react"; //hooks
const Form = (props) => {
  // name -> var
  // setName - func

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(name);
  // console.log(email);
  // console.log(password);

props.newForm({
  name, email, password
})

  return (
    <form action="">
      <div>
        <label htmlFor="">name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
    </form>
  );
};

export default Form;
