import React from "react";
import { TypeAnimation } from "react-type-animation";

const Code = ({ gredientColor }) => {
  return (
    <div className="text-white">
      <p className="text-yellow-300">
        <TypeAnimation 
        sequence={["<!DOCTYPE html>",5000,""]}
           repeat={Infinity}
           cursor={true}
       /></p>
    
      <p><TypeAnimation 
        sequence={["<html>",6000,""]}
           repeat={Infinity}
           cursor={true}
           
       /></p>



      <p>
      <TypeAnimation 
        sequence={["head><title>Example</",7000,""]}
           repeat={Infinity}
           cursor={true}
       />
      </p>
      <p><TypeAnimation 
        sequence={["title><link",8000,""]}
           repeat={Infinity}
           cursor={true}
       /></p>
      <span className="text-pink-100">
      <TypeAnimation 
        sequence={["rel=",9000,""]}
           repeat={Infinity}
           cursor={true}
       />
        <span className="text-pink-300"><TypeAnimation 
        sequence={[`"stylesheet"`,10000,""]}
           repeat={Infinity}
           cursor={true}
       /></span>
       <TypeAnimation 
        sequence={[`href=`,11000,""]}
           repeat={Infinity}
           cursor={true}
       />
        <span className="text-pink-300"><TypeAnimation 
        sequence={[`"styles.css">`,12000,""]}
           repeat={Infinity}
           cursor={true}
       /></span>
      </span>
      <p> <TypeAnimation 
        sequence={[`/head>`,13000,""]}
           repeat={Infinity}
           cursor={true}
       /></p>
      <p><TypeAnimation 
        sequence={[`body>`,14000,""]}
           repeat={Infinity}
           cursor={true}
       /></p>
      <p>
      <TypeAnimation 
        sequence={[`h1><a`,15000,""]}
           repeat={Infinity}
           cursor={true}
       />
        <span className="text-pink-100">
        <TypeAnimation 
        sequence={[`href="`,16000,""]}
           repeat={Infinity}
           cursor={true}
       />
          <span className="text-pink-300">
          <TypeAnimation 
        sequence={[`"/">Header`,17000,""]}
           repeat={Infinity}
           cursor={true}
       /></span>
        </span>
        <TypeAnimation 
        sequence={[`</a>`,18000,""]}
           repeat={Infinity}
           cursor={true}
       />
      </p>
      <p>
      <TypeAnimation 
        sequence={[`/h1>`,19000,""]}
           repeat={Infinity}
        //    cursor={true}
       /></p>
      <p>
      <TypeAnimation 
        sequence={[`nav><a`,20000,""]}
           repeat={Infinity}
        //    cursor={true}
       />
        <span className="text-pink-100">
        <TypeAnimation 
        sequence={[`href=`,21000,""]}
           repeat={Infinity}
        //    cursor={true}
       />
          <span className="text-pink-300">
          <TypeAnimation 
        sequence={[`"one/">One`,22000,""]}
           repeat={Infinity}
        //    cursor={true}
       />
        </span>
        </span>
        <TypeAnimation 
        sequence={[`</a><a`,23000,""]}
           repeat={Infinity}
        //    cursor={true}
       />
        <span className="text-pink-100">
        <TypeAnimation 
        sequence={[`href=`,24000,""]}
           repeat={Infinity}
        //    cursor={true}
       />
          <span className="text-pink-300"><TypeAnimation 
        sequence={[`"two/">two<`,25000,""]}
           repeat={Infinity}
        //    cursor={true}
       /></span>
        </span>
      </p>
      <p>
      <TypeAnimation 
        sequence={[`a><a`,5000,""]}
           repeat={Infinity}
           cursor={true}
       />
        <span className="text-pink-100">
        <TypeAnimation 
        sequence={[`href=`,5000,""]}
           repeat={Infinity}
           cursor={true}
       />
          <span className="text-pink-300"><TypeAnimation 
        sequence={[`"three/">three<`,5000,""]}
           repeat={Infinity}
           cursor={true}
       /></span>
        </span>
        <TypeAnimation 
        sequence={[`</a>`,5000,""]}
           repeat={Infinity}
           cursor={true}
       />
      </p>
      <p>
      <TypeAnimation 
        sequence={[`/nav>`,5000,""]}
           repeat={Infinity}
           cursor={true}
       /></p>
    </div>
  );
};

export default Code;
 {/*incomplete  codeSecion-------------------------------------------------------- */}
    {/* <div className="relative mx-auto">
        <CodeSection heading={<div>
                                Unlock your {<HighlightedText text={"coding potential"}/>} with our online courses.
                            </div>}
                    para={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    postion={"flex-row"}
                    // code={`
                    //         `
                    //     }
                        btn1={
                            {
                                text:"Try it Yourself",
                                isYellow:true,
                                linkTo:"/signup"
                            }
                        }
                        code={<div>
                            <span className="text-yellow-300"> &lt;!DOCTYPE html&gt;</span>
                             <p>&lt;html&gt;</p>
                             <p>&lt;head&gt;</p>
                             <p>&lt;title&gt;Example &lt;/title&gt;</p>
                             <p>&lt;link </p>
                             <p className="text-pink-100">
                               rel=<span className="text-pink-300">"stylesheet"</span>
                               href=<span className="text-pink-300">"styles.css"</span>&gt;
                             </p>
                             <p> /head&gt;</p>
                             <p>body&gt;</p>
                             <p>
                               &lt;h1&gt;&lt;a&gt;
                               <span className="text-pink-100">
                                 href="
                                 <span className="text-pink-300">/"&gt;Header</span>
                               </span>
                               &lt;/a&gt;
                             </p>
                             <p>/h1&gt;</p>
                             <p>&lt;nav&gt;&lt;a&gt;{" "}
                             <span className="text-pink-100">
                               href=
                               <span className="text-pink-300">"one/"&gt; One</span>
                             </span>
                             &lt;/a&gt; &lt;a&gt;{" "}
                             <span className="text-pink-100">
                               href=
                               <span className="text-pink-300">"two/"&gt; two</span>
                             </span>
                             &lt;</p>
                             <p>
                             /a&gt; &lt;a&gt;{" "}
                             <span className="text-pink-100">
                               href=
                               <span className="text-pink-300">"three/"&gt; three</span>
                             </span>
                             &lt;/a&gt;</p> 
                             <p>/nav&gt;</p>
                           </div>}
                        btn2={
                            {
                                text:"Learn More",
                                isYellow:false,
                                linkTo:"/login"
                            }
                        }
                        bgGredient={"bg-gradient-to-b from-blue-200  via-blue-100 to-blue-50"}
        />
    </div> */}