import React from 'react'

const Weatherresult = ({date,mintemp,maxtemp,condition,icon}) => {
  return (
    <div className='result  ' >
        <h2>{date }</h2>
        <ul  >
            <li><img src={icon} alt="image" /> </li>
            <li>{condition}  </li>
            <li> {mintemp} C /{maxtemp} C</li>
        </ul>
      
    </div>
  )
}

export default Weatherresult
