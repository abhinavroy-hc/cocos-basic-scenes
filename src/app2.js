var SCENE2_INITIALIZE = false;

var Layer2 = cc.LayerColor.extend({
    sprite:null,
    text:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var topDisplayText = new ccui.Text();
        topDisplayText.attr({
            string: "MoveBy Action of 5s on Character",
            fontName: "Arial",
            fontSize: 32,
            x: size.width / 2.0,
            y: size.height / 2.0 + 270
        });
        this.addChild(topDisplayText);

        this.sprite = new cc.Sprite(res.charac1_png);
        this.sprite.attr({
            x: 20,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        
        var spriteAction = new cc.MoveBy(5, cc.p(size.width / 2, 0));
        this.sprite.runAction(spriteAction);

        getNavBtns.call(this);

        return true;
    }
});
 
var Layer2Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(!SCENE2_INITIALIZE){
            // SCENE2_INITIALIZE = true;
            var layer = new Layer2();
            layer.setColor(cc.color("#472183"));
            this.addChild(layer);
        }
    }
});
 