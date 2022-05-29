import React from 'react'
import {Header,LineChart} from '../../components';
const line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl
    '>
      <Header category='Chart' title='Inflation Rate' /> 
      <LineChart />
    
    </div>
  )
}

export default line