import { useState } from 'react';

export default function Timeline({children}) {

  // const [highlighted, setHighlighted] = useState('before-item');

  // const currentTime = () => {

  // }

  return (
    <div id="timeline-navigation">
      <div className="timeline-menu" aria-labelledby="A list of times of day and important information.">
        <h2>What you need to know:</h2>
        {children}
      </div>
    </div>
  )
}

// <ul className="menu flex flex-col">
//           <li className="menu-item" id="before-item"><a href="#before">Before the day</a></li>
//           <li className="menu-item" id="morning-item"><a href="#morning">Morning of</a></li>
//           <li className="menu-item" id='during-item'><a href="#during">During</a></li>
//           <li className="menu-item" id='after-item'><a href="#after">After</a></li>
//         </ul>