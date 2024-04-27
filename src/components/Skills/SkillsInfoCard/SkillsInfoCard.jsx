import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({heading, skills}) => {
  return <div className='skills-info-card'>
      <h6>{heading}</h6>

      <div className='skills-info-content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>          
            <div className='icon-container'>
              <img className='icon' src={item.skill} alt="" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
};

export default SkillsInfoCard;
