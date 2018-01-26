class Ground extends GuaImage {
    constructor(game) {
        super(game, 'ground')

        this.setup(game)
    }
    setup(game) {
        this.grounds = []
        this.skipCount = 5

        for(var i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19
            g.y = 540
            // this.scene.addElement(g)
            this.grounds.push(g)
        }
    }

    update() {
        super.update()
        // 地面移动
        this.skipCount--
        var offset = -5
        if(this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for(var i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }

}