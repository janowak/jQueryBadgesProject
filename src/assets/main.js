$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3256685.json',
    dataType: 'jsonp',
    success: function(response) {
      var badgesElement = $('#badges');
      response.courses.completed.forEach(function(element) {
        badgesElement.add("<div class='course'></div>");
      })
    }
  });

});
