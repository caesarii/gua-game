class Scene  extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setupInputs() {
        var game = this.game
        game.registerAction('a', () => {
            this.player.moveLeft()
        })
        game.registerAction('d', () => {
            this.player.moveRight()
        })
        game.registerAction('w', () => {
            this.player.moveUp()
        })
        game.registerAction('s', () => {
            this.player.moveDown()
        })

        game.registerAction('j', () => {
            this.player.fire()
        })
    }


    setup() {
        const game = this.game
        this.numberOfEnemies = 3
        this.enemies = []
        this.bg = GuaImage.new(game, 'sky')
        this.cloud = Cloud.new(game, 'cloud')
        this.player =  Player.new(game)//GuaImage.new(game, 'player')
        this.player.x = 100
        this.player.y = 450


        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemies()

        // add particles
        var ps = GuaParticleSystem.new(this.game)
        this.addElement(ps)


    }

    addEnemies() {
        const es = []
        for(var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es

    }
    update() {
        super.update()
        this.cloud.y += 1
    }
}
