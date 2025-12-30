import React from 'react';

const Timeline = () => {
  const steps = [
    { id: 1, text: 'Nominate Your Friend', highlight: 'Nominate' },
    { id: 2, text: 'The Team At Arcmen Interior Design Will Ask To Visit Our Experience Center With Your Friend', highlight: 'Visit Our Experience Center' },
    { id: 3, text: 'You Will Receive An Acknowledgement Once Your Friend Book', highlight: 'Acknowledgement' },
    { id: 4, text: 'For Every Friend Who Chooses Arcmen Interior Design, Great Rewards Await You', highlight: 'Great Rewards Await You' },
    { id: 5, text: 'Get The Rewards You Deserve.', highlight: 'Rewards' },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">How It Process?</h2>
      <div className="timeline">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`timeline-step ${step.id % 2 === 0 ? 'timeline-left' : 'timeline-right '}`}
          >
            <div className="timeline-circle">{`0${step.id}`}</div>
            <div className="timeline-content">
              <h3>
                {step.text.split(step.highlight)[0]}
                <span className="highlight">{step.highlight}</span>
                {step.text.split(step.highlight)[1]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
