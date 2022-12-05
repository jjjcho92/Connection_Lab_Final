let yes_count = 0
let no_count = 0

window.addEventListener('load', () => {
  displayCount()

  document.getElementById('yes-b').addEventListener('click', () => {
    assignYesCount(yes_count + 1)
    saveToDb()
    displayCount()
  })

  document.getElementById('no-b').addEventListener('click', () => {
    assignNoCount(no_count + 1)
    saveToDb()
    displayCount()
  })

  document.getElementById('get-tracker').addEventListener('click', () => {
    displayCount()
  })
})

function displayCount() {
  fetch('/counts')
    .then(resp => resp.json())
    .then(data => {
      document.getElementById('click-info').innerHTML = ''

      const createdAt = data.data[0].created_at
      const yesCount = data.data[0].yes_count
      const noCount = data.data[0].no_count
      assignYesCount(yesCount)
      assignNoCount(noCount)
      let elt = document.createElement('p')
      elt.innerHTML = `${createdAt}: Yes: ${yesCount} NO: ${noCount}`
      document.getElementById('click-info').appendChild(elt)
    })
}

function saveToDb() {
  fetch('/counts', {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({yes_count, no_count})
  })
    .then(response => response.json())
    .then(console.log)
    .catch(console.log)
}

function assignYesCount(count) {
  yes_count = count
  document.getElementById('yes-counter').innerHTML = yes_count
}

function assignNoCount(count) {
  no_count = count
  document.getElementById('no-counter').innerHTML = no_count
}
