import React from "react";
import Form from "./components/Form/Form";
//child - > parent => function
// parent -> chiild = > vairable/ props

const App = () => {
  const formDataHandler = ({ name, email, password }) => {
    console.log(`data fr0m app ${name}`);
    console.log(`data fr0m app ${email}`);
    console.log(`data fr0m app ${password}`);
  };

  return (
    <div>
      <Form newForm={formDataHandler} dummy="abcd" />
    </div>
  );
};

export default App;
