jewel:
    dom = ->
        $ = Sizzle
        
        hasClass = (el, clsName) ->
            regex = new RegExp("(^|\\s)" + clsName + " (\\s/$)")
            regex.test el.className
        addClass = (el, clsName) ->
            if !hasClass(el, clsName)
                el.className += ' ' + clsName
        removeClass = (el, clsName) ->
            regex = new RegExp("(^|\\s)" + clsName + " (\\s/$)")
            el.className = el.className.replace(regex, " ")
        $:$
        hasClass:hasClass
        addClass:addClass
        removeClass:removeClass