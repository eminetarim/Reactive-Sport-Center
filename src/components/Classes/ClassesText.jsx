import React from "react";
import yoga from "../../assets/img/yoga.jpg";
import group from "../../assets/img/group.webp";
import solo from "../../assets/img/solo.jpg";
import stret from "../../assets/img/stret.webp";


const classInfo = {
  yoga: {
    h1: "Why are your Yoga?",
    h2: "When comes Yoga Your Time",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consequuntur?",
    imgSrc: yoga,
  },
  group: {
    h1: "Why are your Group?",
    h2: "When comes Group Your Time",
    p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has ",
    imgSrc:group,
  },
  solo: {
    h1: "Why are your Solo?",
    h2: "When comes Solo Your Time",
    p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    imgSrc: solo,
  },
  stretching: {
    h1: "Why are your Stretching?",
    h2: "When comes Stretching Your Time",
    p: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    imgSrc: stret,
  },
};

const ClassesText = ({ activeClass }) => {
  const { h1, h2, p, imgSrc } = classInfo[activeClass];

  return (
    <div id="feat-cont">
      <h1 id="feat-h1">{h1}</h1>
      <h2 id="feat-h2">{h2}</h2>
      <p id="feat-p">{p}</p>
      <img src={imgSrc} alt={activeClass} />
    </div>
  );
};

export default ClassesText;
