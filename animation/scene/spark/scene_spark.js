
class SceneSpark extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello gua')
        this.addElement(label)

        var ps = GuaParticleSystem.new(game)
        this.addElement(ps)
    }

}


