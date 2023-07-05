import React from 'react'
import './LearningOptions.css'

const ServiceLocation = (props) => {
    const options = [
        {
            text: "New York",
            handler: props.actionProvider.handleNewYorkList,
            id: 1,
        },
        {
            text: "New Jersey",
            handler: props.actionProvider.handleNewJerseyList,
            id: 4
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

    return (
        <div style={{ backgroundColor: '#f1f1f1', borderRadius: '12px', padding: '5px', boxShadow: '2px 2px 4px rgba(150, 149, 149, 0.4)' }} className="learning-options-container">{optionsMarkup}</div>
    )
}

export default ServiceLocation