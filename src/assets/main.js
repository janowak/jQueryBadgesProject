$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3256685.json',
    dataType: 'jsonp',
    success: function(response) {
      var badgesElement = $('#badges');

      response.courses.completed.forEach(function(element) {
        var course = $('<div />', {'class': 'course'});
        var title = $('<h3>' + element.title +' </h3>');

        var img = $('<img />', {'src': element.badge});
        var a = $('<a />', {href: element.url, target: '_blank',class: 'btn btn-primary'});
        a.text('See Course');

        title.appendTo(course);
        img.appendTo(course);
        a.appendTo(course);
        course.appendTo(badgesElement);
      })
    }
  });

});
