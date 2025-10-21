import React from 'react'

const SectionButton = ({handleActivePage, activePage}) => {
  return (
    <div className='section-buttons'>
      <button className={activePage === 'react-section' ? 'activesection-btn' : ''} onClick={() => handleActivePage('react-section')}>React JS</button>
      <button className={activePage === 'uiux-section' ? 'activesection-btn' : ''} onClick={() => handleActivePage('uiux-section')}>UI/UX</button>
      <button className={activePage === 'others-section' ? 'activesection-btn' : ''} onClick={() => handleActivePage('others-section')}>Others</button>
    </div>
  )
}

export default SectionButton
