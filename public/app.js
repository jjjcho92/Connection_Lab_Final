let yesCount = 0
let noCount = 0
let currentQuestionId = 0

const userId = Math.ceil(Math.random() * 100000000)
const questions = [
  { title: 'Q1: Do you feel a tenny, tiny bit strange seeing it?', imageSrc: 'img/1B.png' },
  { title: 'Q2: Have you heard of this movie?', imageSrc: 'img/2.jpg' },
  { title: 'Q3: Does this feel a little inappropriate?', imageSrc: 'img/3.jpg' },
  { title: 'Q4: Find it odd seeing this at the airport today?', imageSrc: 'img/4.jpg' },
  { title: 'Q5: Find it weird if this is a NYU student club photo?', imageSrc: 'img/5.jpg' },
  { title: 'Q6: Be shocked if received this ring as a gift?', imageSrc: 'img/6.jpg' },
]

window.addEventListener('load', () => {
  displayCount()


  document.getElementById('yes-b').addEventListener('click', () => {
    assignYesCount(yesCount + 1)
    saveToDb(true)
    nextQuestion()
  })

  document.getElementById('no-b').addEventListener('click', () => {
    assignNoCount(noCount + 1)
    saveToDb(false)
    nextQuestion()
  })

})

function displayCount() {
  fetch('/counts')
    .then(resp => resp.json())
    .then(data => {
      document.getElementById('total-info').innerHTML = ''
      const createdAt = data.data[0].created_at
      const yesCount = data.data[0].yesCount
      const noCount = data.data[0].noCount
      const currentQuestion = data.data[0].currentQuestionId
      assignYesCount(yesCount)
      assignNoCount(noCount)
      let elt = document.createElement('p')
      elt.innerHTML = `${createdAt} || Question-Number: ${currentQuestion} Yes: ${yesCount} NO: ${noCount}`
      document.getElementById('total-info').appendChild(elt)

    })


}

function saveToDb(isYes = true) {
  fetch('/counts', {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      currentQuestionId,
      yesCount: isYes ? 1 : 0,
      noCount: isYes ? 0 : 1,
      userId
    })
  })
    .then(response => response.json())
    .then(console.log)
    .catch(console.log)
}

function assignYesCount(count) {
  yesCount = count
  document.getElementById('yes-counter').innerHTML = yesCount
}

function assignNoCount(count) {
  noCount = count
  document.getElementById('no-counter').innerHTML = noCount
}

function nextQuestion() {
  currentQuestionId++

  if (currentQuestionId === 6) {
    window.location.href = "poll_result.html";
    return
  }

  const title = questions[currentQuestionId].title
  document.getElementById("pic").src = questions[currentQuestionId].imageSrc;
  document.getElementById("Q-title").innerHTML = title;
}



// **Results Page (Chart.js)** //

window.addEventListener('load', () => {

  //Chart1
  const data1 = [
    { result: 0, count: 6 },
    { result: 1, count: 10 },
  ];

  new Chart(
    document.getElementById('resultChart1'),
    {
      type: 'pie',
      data: {
        labels: [
          'Yes',
          'No',
        ],
        datasets: [
          {
            label: 'Number of Votes',
            data: data1.map(row => row.count),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Q1: Buddhist Swastika feels weird'
          }
        }
      },
    }
  )

  //Chart2

  const data2 = [
    { result: 0, count: 18 },
    { result: 1, count: 8 },
  ];

  new Chart(
    document.getElementById('resultChart2'),
    {
      type: 'pie',
      data: {
        labels: [
          'Yes',
          'No',
        ],
        datasets: [
          {
            label: 'Number of Votes',
            data: data2.map(row => row.count),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Q2: You know Jojo Rabbit (2019)'
          }
        }
      },
    }
  )

  //Chart3

  const data3 = [
    { result: 0, count: 12 },
    { result: 1, count: 6 },
  ];

  new Chart(
    document.getElementById('resultChart3'),
    {
      type: 'pie',
      data: {
        labels: [
          'Yes',
          'No',
        ],
        datasets: [
          {
            label: 'Number of Votes',
            data: data3.map(row => row.count),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Q3: Japanese 卍 culture is too much'
          }
        }
      },
    }
  )

  //Chart4

  const data4 = [
    { result: 0, count: 12 },
    { result: 1, count: 6 },
  ];

  new Chart(
    document.getElementById('resultChart4'),
    {
      type: 'pie',
      data: {
        labels: [
          'Yes',
          'No',
        ],
        datasets: [
          {
            label: 'Number of Votes',
            data: data4.map(row => row.count),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Q4: Finnish Air Force Swastika Is Odd'
          }
        }
      },
    }
  )

  //Chart5

  const data5 = [
    { result: 0, count: 16 },
    { result: 1, count: 2 },
  ];

  new Chart(
    document.getElementById('resultChart5'),
    {
      type: 'pie',
      data: {
        labels: [
          'Yes',
          'No',
        ],
        datasets: [
          {
            label: 'Number of Votes',
            data: data5.map(row => row.count),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Q5: Red Swastika Society Feels Strange'
          }
        }
      },
    }
  )

  //Chart6

  const data6 = [
    { result: 0, count: 12 },
    { result: 1, count: 6 },
  ];

  new Chart(
    document.getElementById('resultChart6'),
    {
      type: 'pie',
      data: {
        labels: [
          'Yes',
          'No',
        ],
        datasets: [
          {
            label: 'Number of Votes',
            data: data6.map(row => row.count),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Q6: Native American Swastika Makes Me Uncomfortable'
          }
        }
      },
    }
  )
})
