
import React from 'react'
import './Experience.css'

const Experience = ({view}) => {
  var hold, test;
  if (view === 'experience') {
    test = true;
  } else {
    test = false;
  }
  hold = test;
  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel">
          <h2>Constant Learning</h2>
          <h2>Attention to Detail</h2>
          <h2>Helping Others</h2>
          <h2>Creative Solutions</h2>
      </div>
    </div>
  )
}

export default Experience