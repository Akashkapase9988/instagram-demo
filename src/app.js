import { mockPosts } from './mock-data.js';

const postsContainer = document.getElementById('posts');
mockPosts.forEach(post => {
  const postEl = document.createElement('div');
  postEl.className = 'post';
  postEl.innerHTML = `
    <img src="${post.image}" />
    <p>${post.caption}</p>
    <span>❤️ ${post.likes} likes</span>
  `;
  postsContainer.appendChild(postEl);
});