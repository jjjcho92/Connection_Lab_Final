import { Chart } from 'chart.js/auto'

(async function() {
  const data = [
    { result: 0, count: 30 },
    { result: 1, count: 28 },
  ];

  new Chart(
    document.getElementById('resultChart').getContext('2d'),
    {
      type: 'pie',
      data: {
        labels: ['Yes', 'No'],
        datasets: [
          {
            label: 'Number of Votes',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
