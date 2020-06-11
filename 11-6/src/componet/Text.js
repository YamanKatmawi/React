import React from "react";

// const Text = (props) => {
//   return (
//     <React.Fragment>
//       <h4>
//         HI I am Yaman{props.name}, and I am {props.age}{" "}
//       </h4>
//     </React.Fragment>
//   );
// };

// export default Text;

class Text extends React.Component {
  render() {
    return (
      <h1>
        {" "}
        Hey I am {this.props.name}, and I am {this.props.age}
      </h1>
    );
  }
}
class Hello extends React.Component {
  render() {
    return <h1>Hey I like React</h1>;
  }
}
export { Text, Hello };
// export default Text;
