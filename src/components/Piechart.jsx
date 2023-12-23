import React from 'react'
import { Chart } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const Piechart = () => {
    const data = {
        labels: [
          'Cappuccino',
          'Mocha',
          'Latte',
          'Milk Tea',
          'Caramel Macchiato'
        ],
        datasets: [{
          label: 'Monthly Slaes',
          data: [300, 50, 100, 25, 50],
          backgroundColor: [
            '#FF6384', // Color for Cappuccino
            '#36A2EB', // Color for Mocha
            '#FFCE56', // Color for Latte
            '#4CAF50', // Color for Milk Tea
            '#FF9800'  // Color for Caramel Macchiato
          ]
            
        }]
      };

  return (
    <div className='bg-light'>
        <Pie data={data}/>
    </div>
  )
}

export default Piechart