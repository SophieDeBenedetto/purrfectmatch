$ ->
  $('#pet').imagesLoaded ->
    $('#pet').masonry
      itemSelector: '.box'
      isFitWidth: true
