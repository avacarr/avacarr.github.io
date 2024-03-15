
import React from 'react'
import './Contact.css'

const Contact = ({view}) => {
  var hold, test;
  if (view === 'contact') {
    test = true;
  } else {
    test = false;
  }
  hold = test;
  return (
    <div className={"page " + (hold ? (test ? 'fadeIn ' : 'fadeOut ') : 'hidden')}>
      <div className="Panel">
          <a href="https://www.linkedin.com/in/alexandertcarr/" target="_blank">LinkedIn</a>
          <a href="https://github.com/avacarr" target="_blank">Github</a>
          <a>avacarr68@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact