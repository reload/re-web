jQuery(function($) {
  'use strict';

  // Simple load page function.
  var loadPage = function (container, path, page) {
    window.history.pushState(null, null, page);
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
    var page;
    if (window.location.pathname != '/') {
      page = window.location.pathname.replace('/', '');
    }

    else {
      page = 'cases';
    }
    loadPage(container, paths.pages, page);
  };

  $('ul.menu a').on('click', function (e) {
    var element = $(this);
    e.preventDefault();
    container.fadeOut(function () {
      loadPage(container, paths.pages, element.data('href'));
    });
  });
});
