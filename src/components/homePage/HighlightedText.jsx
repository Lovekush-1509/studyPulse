import React from "react"

const HighlightedText = ({text}) => {
  return (
    <span className=" bg-gradient-to-b from-blue-200  via-blue-100 to-blue-50  text-transparent bg-clip-text">
        {""}
        {text}
    </span>
  )
};

export default HighlightedText;
