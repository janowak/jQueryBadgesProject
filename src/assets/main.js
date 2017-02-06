$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3256685.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

});
