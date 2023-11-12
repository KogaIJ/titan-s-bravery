const repoOwner = 'KogaIJ';
const repoName = 'titan-s-bravery';
const folderPath = 'path/';

fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`)
  .then(response => response.json())
  .then(data => {
    const items = data.map(item => item.name);

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    document.getElementById('randomItem').textContent = randomItem;
  })
  .catch(error => {
    console.error('Failed to fetch icons:', error);
  });
