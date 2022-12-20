var SCENE2_INITIALIZE = false;

var Layer4 = cc.LayerColor.extend({
    sprite:null,
    text:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var topDisplayText = new ccui.Text();
        topDisplayText.attr({
            string: "BezierBy Action on Character",
            fontName: "Arial",
            fontSize: 32,
            x: size.width / 2.0,
            y: size.height / 2.0 + 270
        });
        
        this.addChild(topDisplayText);

        this.sprite = new cc.Sprite(res.airChara2_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2 - 100
        });
        this.sprite.setScale(0.3);
        this.addChild(this.sprite, 0);

        var bezier = [cc.p(0, size.height / 2), cc.p(0, -size.height/4), cc.p(0, 100)];
        var spriteAction = new cc.BezierBy(3, bezier);
        this.sprite.runAction(spriteAction);

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
                        cc.log("Left mouse button pressed at " + event.getLocationX());
                    }
                }
            }, this);
        }

        return true;
    }
});
 
var Layer4Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(!SCENE2_INITIALIZE){
            // SCENE2_INITIALIZE = true;
            var layer = new Layer4();
            layer.setColor(cc.color("#472183"));
            this.addChild(layer);
        }
    }
});