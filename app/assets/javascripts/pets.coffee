$ ->
  $('#pet').imagesLoaded ->
    $('#pet').masonry
      itemSelector: '.box'
      isFitWidth: true

# $(document).on "page:change", ->
#  $("#form-link").click ->
#    $("#contact-form").fadeToggle()
