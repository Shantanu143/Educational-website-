// import React from 'react'
import './rodeMap.css'
// const Arrow = () => {
//     return <div className="arrow"></div>;
// };
const steps = [
    "Oct 2021 - IPT Founded - With the Vision to bridge the gap between Academic Knowledge and Industrial Skill Requirements.",
    "June 2022 - IPT Conducted first Batch at one of the prestigious Institute of Chhatrapati Sambhajinagar, formerly known as Aurangabad.",
    "April 2023 - IPT Conducted second Batch at Shivchhatrapati College, Chhatrapati Sambhajinagar (Auranagbad).",
    "July 2023 - 20% candidates got placed at assistant managerial level in Accounting Field.",
    "Counting......!!!"
  ];
const RodeMap = () => {
    return (
        <div className="timeline ">
            <h2 className="roadmap-heading">The IPT Story</h2>
          <div className="roadmap">
            {steps.map((step, index) => (
              <div key={index} className="roadmap-item">
                <span className="step">{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default RodeMap