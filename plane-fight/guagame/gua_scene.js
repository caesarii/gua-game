

class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.debugModeEnabled = true
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        for(var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            // this.game.drawImage(e)
            e.draw()
        }
    }

    addElement(e) {
        e.scene = this
        this.elements.push(e)
    }

    removeElement(ele) {
        var elements = this.elements
        elements.forEach(function(curr, index) {
            if(curr == ele) {
                elements.splice(index, 1)
            }
        })
    }
    update() {
        if(this.debugModeEnabled) {
            for(var i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }

        for(var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }

    }
}
