const allPlayers = () => {
  document.getElementById('player-container').innerHTML = '';
  const searchPlayer = document.getElementById(`search-input`).value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchPlayer}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayerDetails(data.player));
};

const showPlayerDetails = (players) => {
  players.forEach((player) => {
    const playerCard = document.getElementById(`player-container`);
    const div = document.createElement("div");
    div.innerHTML = `<div class="player-card border p-5 my-5">
  <div class="profile-picture">
    <img src="${player.strThumb}" alt="" class="w-50 rounded">
  </div>
  <h2>Name: ${player.strPlayer}</h2>
  <h5>Country: ${player.strNationality}</h5>
  <p>${player.strDescriptionEN.slice(0, 150)}</p>
  <div class="remove-details-button">
    <button class="btn btn-danger">Remove</button>
    <button onclick="playerDetails('${player.idPlayer}')" class="btn btn-success">Details</button>
  </div>
</div>`;
    playerCard.appendChild(div);
  });
};

const playerDetails = (playerID) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPlayerDetails(data.players[0]));
};

const setPlayerDetails = (playerInfo) => {

  if(playerInfo.strGender == 'Male'){
    document.getElementById('male').style.display = 'block';
    document.getElementById('female').style.display = 'none';
  }
  else if(playerInfo.strGender == 'Female'){
    document.getElementById('female').style.display = 'block';
    document.getElementById('male').style.display = 'none';
  }
  document.getElementById(`details-container`).innerHTML = `<div class="profile-picture">
    <img src="${playerInfo.strThumb}" alt="" class="w-50 rounded">
  </div>
  <h2>Name: ${playerInfo.strPlayer}</h2>
  <h5>Country: ${playerInfo.strNationality}</h5>
  <p>${playerInfo.strDescriptionEN.slice(0,1500)}</p>
</div>
  `;
};
