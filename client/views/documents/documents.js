Template.documents.rendered = function () {
  var el = document.getElementById('documentList')
  var bodyEvent = new Hammer(el)
  bodyEvent.on('swipe', function (e) {
    console.log(e.direction)
  })
}