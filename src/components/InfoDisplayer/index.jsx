import React from "react";
import Typing from "react-typing-animation";

const InfoDisplayer = () => {

  return (
    <div style={{ color: "#0f0" }}>
      <Typing speed={50}>
        Développeur Full-Stack Ruby on Rails/ReactJs,
        <Typing.Speed ms={20} />
      </Typing>
      <Typing>
        <span>Lorem Ipsum Sin </span>
        <Typing.Backspace count={20} />
      </Typing>

      <Typing>
        <span>Ouvert à toutes oportunités.</span>
        <span>This line will get instantly removed after a 500 ms delay</span>
        <Typing.Reset count={1} delay={500} />
      </Typing>
    </div>
  );
};

export default InfoDisplayer;
