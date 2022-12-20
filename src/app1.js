var SCENE1_INITIALIZE = false;
var sceneNo = 1;
var maxScenes = 5;
var count = 0;

var Layer1 = cc.LayerColor.extend({
    sprite:null,
    text:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var topDisplayText = new ccui.Text();
        topDisplayText.attr({
            string: "ImageView",
            fontName: "Arial",
            fontSize: 32,
            x: size.width / 2.0,
            y: size.height / 2.0 + 200
        });
        this.addChild(topDisplayText);

        var imageView = new ccui.ImageView();
        imageView.loadTexture(res.HelloWorld_png);
        imageView.x = size.width / 2;
        imageView.y = size.height / 2;
        this.addChild(imageView)
        
        
        var clickCount = new ccui.Text();
        clickCount.attr({
            fontName: "Arial",
            fontSize: 32,
            x: size.width / 2.0,
            y: size.height / 2.0 - 200
        });

        clickCount.string = count;
        this.addChild(clickCount);

        getNavBtns.call(this);

        if(cc.sys.capabilities.hasOwnProperty("touches")){
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function(touch, event){
                    cc.log(touch.getLocationX());
                    return true;
                }
            }, this);
        }
        
        if(cc.sys.capabilities.hasOwnProperty("mouse")){
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event){
                    if(event.getButton() == cc.EventMouse.BUTTON_LEFT){
                        count++;
                        clickCount.string = count;
                        // cc.log("Left mouse button pressed at " + event.getLocationX());
                    }
                }
            }, this);
        }

        var menuItem1 = new cc.MenuItemFont("Go Back to Menu", goBack);

        var menu = new cc.Menu(menuItem1);
        menu.x = 0;
        menu.y = 0;
        menuItem1.x = size.width - 130;
        menuItem1.y = 25;
        
        this.addChild(menu);

        return true;
    }
});

function getNavBtns() {
    var backward = new cc.MenuItemImage(res.back_png, res.back_png, backFunc);
    var forward = new cc.MenuItemImage(res.forward_png, res.forward_png, forwardFunc);
    var buttonGroup = new cc.Menu(backward, forward);
    buttonGroup.y = 40;
    buttonGroup.alignItemsHorizontally();
    this.addChild(buttonGroup);
}

const runDifferentScene = () => {
    switch(sceneNo){
        case 1:
            var scene = new Layer1Scene();
            cc.director.runScene(scene);
            break;
        case 2:
            var scene = new Layer2Scene();
            cc.director.runScene(scene);
            break;
        case 3:
            var scene = new Layer3Scene();
            cc.director.runScene(scene);
            break;
        case 4:
            var scene = new Layer4Scene();
            cc.director.runScene(scene);
            break;
        case 5:
            var scene = new Layer5Scene();
            cc.director.runScene(scene);
            break;
    }
}

const backFunc = () => {
    if(sceneNo > 1){
        sceneNo--;
        runDifferentScene();
    }
}

const forwardFunc = () => {
    if(sceneNo < maxScenes){
        sceneNo++;
        runDifferentScene();
    }
}
 
var Layer1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(!SCENE1_INITIALIZE){
            // SCENE1_INITIALIZE = true;
            var layer = new Layer1();
            layer.setColor(cc.color("#472183"));
            this.addChild(layer);
        }
    }
});
 