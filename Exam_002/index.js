function fetchData() {
  fetch('https://data.cityofnewyork.us/resource/25th-nujf.json')
    .then(response => response.json())
    .then(json => displayData(json))
}

function displayData(json) {
  const main = document.querySelector('main');
  const table = document.createElement('TABLE');
  const headerRow = document.createElement('tr');
  
  const tHead1 = document.createElement('th');
  const tHead2 = document.createElement('th');
  const tHead3 = document.createElement('th');
  const tHead4 = document.createElement('th');

  tHead1.innerText = 'Popular Name';
  tHead2.innerText = 'Gender';
  tHead3.innerText = 'Total Number';
  tHead4.innerText = 'Rank';

  headerRow.append(tHead1, tHead2, tHead3, tHead4)
  
  table.appendChild(headerRow)

  json.forEach(data => {
    const row = document.createElement('tr');
    const popularName = document.createElement('td');
    popularName.innerText = data.nm;
    
    const gender = document.createElement('td');
    gender.innerText = data.gndr;

    const totalNumber = document.createElement('td');
    totalNumber.innerText = data.cnt;

    const rank = document.createElement('td');
    rank.innerText = data.rnk;

    row.append(popularName, gender, totalNumber, rank);
    table.appendChild(row);

  })

  main.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchData();
})
