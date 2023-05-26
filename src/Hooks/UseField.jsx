import  { useState } from "react";

const UseField = ({ type }) => {
  const [val, setVal] = useState("");

    const onChange = event => {
        setVal(event.target.value)
    }
    
    return{
        type,
        val,
        onChange,
    }

};

export default UseField;
