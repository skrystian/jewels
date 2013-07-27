window.addEventListener "load", ->
    Modernizr.load
        load: ["js/sizzle.js", "js/dom.js", "js/game.js"]
        complete: =>
            console.log 'Wszystkie pliki zostały załadowane!'