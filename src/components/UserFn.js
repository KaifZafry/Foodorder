import { useState } from "react";
const UserFn= ({name, location})=>{
    const [count] = useState(0);
    const [count1] = useState(1);
    return (
        <>
        <h1>Count: {count}</h1>
        <h1>Count1: {count1}</h1>
         <h2>Name : {name}</h2>
         <h3>Location: {location}</h3>
        </>
    )
}
export default UserFn;