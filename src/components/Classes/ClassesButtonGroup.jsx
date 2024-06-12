import React from "react";

const buttons = [
  { id: "yoga", title: "Yoga" },
  { id: "group", title: "Group" },
  { id: "solo", title: "Solo" },
  { id: "stretching", title: "Stretching" },
];

const ClassesButtonGroup = ({ setActiveClass }) => {
  return (
    <div className="button-group">
      {buttons.map((button) => (
        <button
          key={button.id}
          id={button.id}
          onClick={() => setActiveClass(button.id)}
        >
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default ClassesButtonGroup;
