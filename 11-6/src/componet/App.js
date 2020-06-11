import React from "react";
import { Text, Hello } from "./Text";
const userLogIn = true;
const names = ["Ali", "Hadi", "Nancy", "Zain"];
const App = () => {
  const NamesList = names.map((name, i) => <li key={i}>{name}</li>);
  return (
    <React.Fragment>
      <h1>Hi, I am React </h1>
      <Text name={userLogIn ? "Ahmad" : "IKD"} age="27" />

      <ul>{NamesList}</ul>
      {
        //<Text name="Homam" age="21" />
        //<h1>{userLogIn ? "Hi yaman" : "LOgin pls"}</h1>
      }
    </React.Fragment>
  );
};
export default App;
