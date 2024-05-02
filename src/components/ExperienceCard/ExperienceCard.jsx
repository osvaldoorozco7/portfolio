import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({details}) => {
  return <div className='work-experience-card'>
      <h6>{details.title}</h6>

      <div className='work-experience-description-container'>
        <a href={details.url}>
          <img className='preview' src={details.preview} alt="" />
        </a>

        <div className='description-container'>
          {details.description}
        </div>
      </div>

      <div className='icons-container'>
        {details.technologies.map((item, index) => (
          <React.Fragment key={`tech_${index}`}>
            <div className='icon-container'>
              <img className='experience-card-icon' src={item.tech} alt="" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
};

export default ExperienceCard;
