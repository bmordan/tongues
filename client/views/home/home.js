var context = famous.core.Engine.createContext()

function addTitle (context) {
  var surface = new famous.core.Surface({
    size: [undefined, 100],
    content: '<h1>Fluently</h1>',
    properties: {
      textAlign: 'center'
    }
  })
  var modifier = new famous.core.Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  })
  context.add(modifier).add(surface) 
}

addTitle(context)