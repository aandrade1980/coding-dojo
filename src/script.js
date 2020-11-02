function setBackground(arena) {
  document.body.style.backgroundImage = `url(${arena}.jpg)`;
}

function selectArena(arena) {
  document.body.style.backgroundImage = `url(${arena}.jpg)`;
  document.getElementById('arenas').style.display = 'none';
  document.getElementById('select-ninja__container').style.display = 'block';
}

function selectedNinja(player) {
  console.log('Player => ', player);
  const selectedNinja = document.getElementById(`${player}`).value;
  console.log('selectedNinja => ', selectedNinja);

  if (player === 'player1') {
    document.getElementById('selectedNinja1').src = `${selectedNinja}.png`;
  } else {
    document.getElementById('selectedNinja2').src = `${selectedNinja}.png`;
  }
}
