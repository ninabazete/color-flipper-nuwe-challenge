import React from "react";
import '../components/style/button.css';

const Button = (props) => {
  const { handleClick, value } = props;
  return (
    <button
     className='btn-pick-color'
     onClick={handleClick}>
      {value}
    </button>
  )
}

export default Button;