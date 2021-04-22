document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.getElementById('image-container');
  for (let i = 0; i < 3; i++) {
    const icon = document.createElement('img');
    icon.setAttribute('src', '/assets/img/javasnipt-icon.png');
    icon.setAttribute('alt', 'CRAB CRAB CRAB CRAB');
    imageContainer.appendChild(icon);
  }
});
