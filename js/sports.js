const allPlayers = () =>{
  const searchPlayer = document.getElementById(`search-input`).value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchPlayer}`
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
}