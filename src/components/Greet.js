import React from 'react'

/* function Greet() {
   return <h1>Hello Ankit with React</h1>
} */

let Greet = (props) => {
   return(
      <div>
         <h1>Hello (Greet){props.name} a.k.a {props.heroName}</h1>
         {props.children}
      </div>
   )
}

export default Greet

