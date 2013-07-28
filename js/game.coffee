class Game
    showScreen: (screenId) ->
        screen = $( "#" +screenId)
        $('.active').removeClass('active')
        screen.attr('class', 'screen active')
        screenId + ' active'
        
class Screens
    firstRun: true
    
    setup: =>
        $('#splash-screen').click ->
            console.log 'click splash screen'
            jewel.screens.run()
        $('#main-menu li').click (e) ->
            action = $(e.target).attr 'name'
            jewel.game.showScreen action
    run: ->
        if @firstRun
            console.log 'run'
            @firstRun = false
            jewel.game.showScreen 'main-menu'
class Settings
    rows: 8
    cols: 8
    baseScore: 100
    numJewelTypes: 7
    
class Board
    #vars
    settings: ''
    jewels: ''
    cols: ''
    rows: ''
    baseScore: ''
    numJewelTypes: ''
    
    initialize: ->
        @settings = jewel.settings
        @numJewelTypes = @settings.numJewelTypes
        @baseScore = @settings.baseScore
        @cols = @settings.cols
        @rows = @settings.rows
    
    print: ->
        console.log 'print'
    
    randomJewel: ->
        Math.floor(Math.random() * @numJewelTypes)
    
    fillBoard: ->
        x: 0
        y: 0
        @jewels = []
        for x in [0..@cols-1]
            @jewels[x] = []
            for y in [0..@rows-1]
                type = @randomJewel()
                @jewels[x][y] = type
        
        
        
            
class Jewel
    game: new Game
    screens: new Screens
    settings: new Settings
    board: new Board

this.jewel = new Jewel
jewel.screens.setup()
jewel.board.initialize()
jewel.board.fillBoard()
