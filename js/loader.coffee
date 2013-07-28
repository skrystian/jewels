window.addEventListener "load", ->
    Modernizr.load
        load: ["js/jquery-1.10.2.min.js", "js/game.js"]
        complete: ->
            console.log 'Wszystkie pliki zostały załadowane!'
            jewel.game.showScreen 'splash-screen'
        