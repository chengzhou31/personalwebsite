/**
 * main.js
 * Handles sidebar navigation and inline link section switching.
 */

(function () {
  'use strict';

  const navLinks = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('.section');

  /**
   * Activate a named section and update nav state.
   * @param {string} target - The id of the section to show.
   */
  function activate(target) {
    navLinks.forEach(link =>
      link.classList.toggle('active', link.dataset.target === target)
    );

    sections.forEach(section =>
      section.classList.toggle('active', section.id === target)
    );

    // Reset scroll position when switching sections
    document.getElementById('content').scrollTop = 0;
  }

  // Sidebar nav links
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      activate(link.dataset.target);
    });
  });

  // Inline links inside section content (e.g. "Get in touch →" in About)
  document.querySelectorAll('.nav-link-inline').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      activate(link.dataset.target);
    });
  });

})();
