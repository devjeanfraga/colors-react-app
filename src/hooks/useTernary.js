import { useState } from "react"

export default (initialValue = false) => {
  const [ternary, setTernary ] = useState(initialValue);
  const toggleTernary = () => { 
    setTernary(!ternary);
  };

  return [ternary, toggleTernary]; 
};