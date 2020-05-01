function Game(canvas) {
  this.context = canvas.getContext("2d")
  this.width = canvas.width
  this.height = canvas.height

  this.keyPressed = {}

  $(canvas).on('keydown keyup', function(e) {
    let keyName = Game.keys[e.which]

    if (keyName) {
      this.keyPressed[keyName] = e.type === 'keydown'
      e.preventDefault()
    }
  })
}

Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}