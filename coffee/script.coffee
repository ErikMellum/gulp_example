$list = $('#list')
$('#add').click ->
  $li = $('<li class="animate">')
  $list.append $li
  $li.html 'test'
  return
$('#remove').click ->
  $('#list li:last').remove()
  return