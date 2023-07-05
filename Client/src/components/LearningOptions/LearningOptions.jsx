import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Jeep",
      handler: props.actionProvider.handleJeepList,
      id: 1,
    },
    {
      text: "Maserati",
      handler: props.actionProvider.handleMaseratiList,
      id: 2
    },
    {
      text: "FIAT", 
      handler: props.actionProvider.handelfiatList,
      id: 3 
    },
    {
      text: "Ram", 
      handler: props.actionProvider.handleRamList,
      id: 4 
    },
    {
      text: "Peugeot", 
      handler: props.actionProvider.handlePguList,
      id: 5
    },
    {
      text: "Alpha Romeo", 
      handler: props.actionProvider.handelalphaList,
      id: 6
    },
    { text: "Citroen", 
      handler: props.actionProvider.handelcitronList,
      id: 7
    },
    { text: "Chrysler", 
      handler: props.actionProvider.handelcrislerList,
      id: 8
    },
    { text: "Dodge", 
      handler: props.actionProvider.handeldodgeList,
      id: 9
    },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button style={{ color: 'black' }}
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div style={{ backgroundColor: '#f1f1f1', borderRadius: '12px', padding: '5px', boxShadow: '2px 2px 4px rgba(150, 149, 149, 0.4)' }} className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;