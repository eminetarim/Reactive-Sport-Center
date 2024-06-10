import React from 'react';

const ClassesButtonGroup = ({ setActiveClass }) => {
  const handleButtonClick = (className) => {
    setActiveClass(className);
  };

  return (
    <div className="button-group">
      <button id="yoga" onClick={() => handleButtonClick('yoga')}>Yoga</button>
      <button id="group" onClick={() => handleButtonClick('group')}>Group</button>
      <button id="solo" onClick={() => handleButtonClick('solo')}>Solo</button>
      <button id="stretching" onClick={() => handleButtonClick('stretching')}>Stretching</button>
    </div>
  );
};

export default ClassesButtonGroup;
