import React from "react";
class Nestedcomp extends React.Component {  
    render() {  
      return <ComponentA name="Login" />;  
    }  
  }  
   function ComponentA(props) {  
    return (  
      <div>  
        <ComponentB name={props.name} />  
      </div>  
    );  
  }  
  class ComponentB extends React.Component {  
    render() {  
      return <button>{this.props.name}</button>;  
    }  
  }  
  
export default Nestedcomp;



import React from 'react';

export const UserContext = React.createContext();

export default function RContext() {
  return (
    <UserContext.Provider value="Sai">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
    
    </UserContext.Consumer>
  )
}