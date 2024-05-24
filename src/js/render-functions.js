function renderImages(images) {
  const imageCards = images.map(image => `
    <li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </a>
    </li>
  `).join('');
  gallery.innerHTML = imageCards;
  new SimpleLightbox('.gallery a', { /* options */ }).refresh();
}

function showLoader(show) {
  loader.classList.toggle('hidden', !show);
}