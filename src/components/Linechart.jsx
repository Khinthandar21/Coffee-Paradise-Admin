import React from 'react'
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Linechart = () => {
    const data = {
        labels: [
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov'
        ],
        datasets: [{
          label: 'Monthly Sales',
          data: [100, 50, 100, 30, 150],
          backgroundColor: "#7b3f00"
            
        }]
      };

  return (
    <div className='bg-light'>
        <Line data={data}/>
    </div>
  )
}

export default Linechart