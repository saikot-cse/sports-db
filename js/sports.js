const allPlayers = () => {
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
  <p>${player.strDescriptionEN.slice(0,150)}</p>
  <div class="remove-details-button">
    <button class="btn btn-danger">Remove</button>
    <button class="btn btn-success">Details</button>
  </div>
</div>`;
    playerCard.appendChild(div);
  });
};
