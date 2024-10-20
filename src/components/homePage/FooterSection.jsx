import React from "react";
import { Link } from "react-router-dom";

const FooterSection = ({ data }) => {
  return (
    <div>
      <div className="text-pure-greys-25 text-lg mb-2">{data.title}</div>
      <div className="flex flex-col text-pure-greys-100 text-sm font-thin gap-2">
        {data.links.map((element, index) => {
          return (
            <Link to={element.link} key={index}>
              {element.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSection;
