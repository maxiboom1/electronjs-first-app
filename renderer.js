const { ipcRenderer } = require('electron');

document.getElementById('fetchButton').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value;
  fetch(url)
    .then(response => response.text())
    .then(data => {
      console.log(data); // For now, just log the data to the console
    })
    .catch(err => console.error(err));
});
