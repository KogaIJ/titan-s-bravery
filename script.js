const repoOwner = 'KogaIJ';
const repoName = 'titan-s-bravery';
const folderPath = '/items';

fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`)
  .then(response => response.json())
  .then(data => {
    const items = data.map(item => item.name);

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    document.getElementById('randomItem').textContent = randomItem;
    document.getElementById('randomImage').src = folderPath + '/' + randomItem;
  })
  .catch(error => {
    console.error('Failed to fetch icons:', error);
  });
