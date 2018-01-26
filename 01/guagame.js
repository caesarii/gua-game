
var GuaGame = function(fps, images, callback) {
    // images 是一个包含图片信息的对象 name: path
    // 程序会在所有图片载入成功后运行
    var g = {
        actions: {},
        keydowns: {},
        images: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    // events
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    // timer
    window.fps = 30
    var runloop = function() {
        // log('fps', fps)
        // events
        var actions = Object.keys(g.actions)
        actions.forEach(function(key, index) {
            if(g.keydowns[key]) {
                g.actions[key]()
            }
        })
        // update
        g.update()

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height)

        // draw
        g.draw()

        // next run loop
        setTimeout(function() {
            runloop()
        }, 1000/window.fps)

    }

    // 用于判断所有图片是否载入
    var loads = []
    // 载入图片
    var names = Object.keys(images)
    for(var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function() {
            console.log('img', img)
            // 存入g.images
            g.images[name] = img
            // 所有图片载入成功，调用 run
            loads.push(1)
            if(loads.length == names.length) {
                console.log('run')
                g.run()
            }
        }

    }

    g.imageByName = function(name) {
        // log('image by name', g.images)
        var img = g.images[name]
        log('img by name', img)
        var image = {
            w: img.width,
            h: img.height,
            image: img
        }
        return image
    }

    // 开始游戏
    g.run = function() {
        callback(g)
        setTimeout(function() {
            runloop(60)

        }, 1000/fps)
    }



    return g

}