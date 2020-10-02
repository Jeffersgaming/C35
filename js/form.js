class Form{
    constructor() {

    }
    display() {
        var title = createElement("h2")
        title.html("CarRacing Game");
        title.position(130, 150);
        var Input = createInput("name");
        var button = createButton("play");
        var greeting = createElement("h3")
        Input.position(130, 160);
        button.position(240, 200);
        button.mousePressed(function(){
            Input.hide();
            button.hide();
            var name = Input.value()
            playerCount++;
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello" + name)
            greeting.position(130, 160);  
        })
    }
}