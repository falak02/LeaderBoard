let players = []

function addPlayer() {

  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const score = parseInt(document.getElementById('score').value, 10)
  const country = document.getElementById('country').value


  if (!firstName || !lastName || isNaN(score) || !country) {
    alert("Please fill all fields correctly.")
    return
  }


  players.push({ firstName, lastName, score, country })


  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('score').value = ''
  document.getElementById('country').value = ''


  updateDisplay();
}

function updateDisplay() {
  const leaderboard = document.getElementById('leaderboard')
  leaderboard.innerHTML = ''

  players.forEach((player, index) => {
    const playerInfo = document.createElement('li')
    playerInfo.innerText = `${player.firstName} ${player.lastName}   ${player.country} - Score: ${player.score}`;

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.onclick = () => {
      players.splice(index, 1)
      updateDisplay()
    }

    const addBtn = document.createElement('button')
    addBtn.innerText = '+5'
    addBtn.onclick = () => {
      player.score += 5
      updateDisplay()
    }

    const subBtn = document.createElement('button')
    subBtn.innerText = '-5'
    subBtn.onclick = () => {
      player.score -= 5
      updateDisplay()
    };

    playerInfo.appendChild(addBtn)
    playerInfo.appendChild(subBtn)
    playerInfo.appendChild(deleteBtn)
    leaderboard.appendChild(playerInfo)
  });
}
