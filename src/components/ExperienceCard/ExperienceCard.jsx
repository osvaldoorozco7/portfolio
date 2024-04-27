import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({details}) => {
  return <div className='work-experience-card'>
      <h6>{details.title}</h6>

      <div className='work-experience-description-container'>
        {details.description}

        <a href={details.url}>
          <img className='preview' src={details.preview} alt="" />
        </a>

      </div>

      <div>
        {details.technologies.map((item, index) => (
          <React.Fragment key={`tech_${index}`}>
            <div className='icon-container'>
              <img className='icon' src={item.tech} alt="" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
};

export default ExperienceCard;
