import React from 'react'
import './Common.css';
import Sideoption from '../Sideoption/Sideoption';
import Movielist from '../Movielist/Movielist';

const Common=()=> {
  return (
    <div className='container'>
    <Sideoption/>
    <Movielist/>
      
    </div>
  )
}
export default Common;