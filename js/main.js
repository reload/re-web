jQuery(function($) {
  'use strict';

  // Simple load page function.
  var loadPage = function (container, path, page) {
    container.hide().load(path + page +'.html', function () {
      container.fadeIn();
    });
  };

  // Set paths.
  var paths = ({
    pages: 'pages/'
  });

  // Set main content container.
  var container = $('#main-content');

  // Onload events.
  window.onload = function () {
    // Load content and fade in.
    loadPage(container, paths.pages, 'cases');
  };

  $('ul.menu a').on('click', function (e) {
    var element = $(this);
    e.preventDefault();
    container.fadeOut(function () {
      loadPage(container, paths.pages, element.data('href'));
    });
  });
});
