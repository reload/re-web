jQuery(function($) {
  'use strict';

  // Simple load page function.
  var loadPage = function (container, path, page) {
    if (!page || page === 'front') {
      window.history.pushState(null, null, '/');
      page = 'front';
    }

    else  {
      window.history.pushState(null, null, page);
    }

    $('body').attr('class', '').addClass('page-' + page);
    container.hide().load(path + page +'.html', function (respone, status) {
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
    if (window.location.pathname !== '/') {
      page = window.location.pathname.replace('/', '');
    }

    else {
      page = '';
    }
    loadPage(container, paths.pages, page);
  };

  $('body').on('click', 'a[data-href]', function (e) {
    var element = $(this);
    e.preventDefault();
    container.fadeOut(function () {
      loadPage(container, paths.pages, element.data('href'));
    });
  });
});
