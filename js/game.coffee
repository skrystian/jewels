jewel:
    game = ->
        dom = jewel.dom
        $ = dom.$
        
        showScreen = (screenId) ->
            activeScreen = $("#game .screen.active")[0]
            screen = $("#" + screenID)[0]
            if activeScreen
                dom.removeClass(screen, "active")
            dom.addClass(screen, "active")
        showScreen:showScreen