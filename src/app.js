var MENU_INITIALIZE = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
        // this.addChild(helloLabel, 5);

        var menuItem1 = new cc.MenuItemFont("Play Scenes", getScene1);
        var menuItem2 = new cc.MenuItemFont("Dummy Item 1", item2);
        var menuItem3 = new cc.MenuItemImage(res.click_png, res.click_png, item3);
        menuItem3.setScale(0.2);

        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3);
        menu.alignItemsVerticallyWithPadding(50);
        
        this.addChild(menu);

        return true;
    }
});

var getScene1 = function() {
    var scene = new Layer1Scene();
    cc.director.pushScene(scene);
}
var item2 = function() {
    cc.log("item2")
}
var item3 = function() {
    cc.log("item3")
}

var goBack = function() {
    SCENE1_INITIALIZE = false;
    cc.director.popScene();
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(!MENU_INITIALIZE){
            MENU_INITIALIZE = true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
    }
});

