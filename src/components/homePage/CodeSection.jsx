import React from "react";
import CustomButton from "./CustomButton";
import Code from "./Code";

const CodeSection = ({
  heading,
  para,
  code,
  btn1,
  btn2,
  postion,
  bgGredient,
}) => {
  return (
    <div className="w-[100%] flex justify-between">
      <div className="w-[50%]">
        <div className="text-white text-lg">{heading}</div>
        <p className="text-richblack-300">{para}</p>
        <div>
          <CustomButton
            text={btn1.text}
            isYellow={btn1.isYellow}
            linkTo={btn1.linkTo}
          />
          <CustomButton
            text={btn2.text}
            isYellow={btn2.isYellow}
            linkTo={btn2.linkTo}
          />
        </div>
      </div>
      <div className={`text-pure-greys-50 flex gap-2 border-[1px] border-pure-greys-200 p-4 ${bgGredient}`}>
      <div className="text-pure-greys-200 w-[5%]">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
      </div>

       <Code/>
    </div>

    </div>
  );
};

export default CodeSection;
