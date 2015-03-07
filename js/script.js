var $list;

$list = $('#list');

$('#add').click(function() {
  var $li;
  $li = $('<li class="animate">');
  $list.append($li);
  $li.html('test');
});

$('#remove').click(function() {
  $('#list li:last').remove();
});
