var SCENE2_INITIALIZE = false;

var Layer3 = cc.LayerColor.extend({
    sprite:null,
    text:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var topDisplayText = new cc.LabelTTF("MoveTo Action of 3s on Character with EaseExponentialOut", "Arial", 32);
        topDisplayText.x = size.width / 2.0;
        topDisplayText.y = size.height / 2.0 + 270;
        this.addChild(topDisplayText);

        this.sprite = new cc.Sprite(res.charac2_png);
        this.sprite.attr({
            x: 20,
            y: size.height / 2
        });
        this.sprite.setScale(0.05);
        this.addChild(this.sprite, 0);

        var spriteAction = new cc.EaseExponentialOut(new cc.MoveTo(2, cc.p(size.width / 2 + 200, size.height / 2)));
        var spriteAction2 = new cc.FadeTo(2, 0);
        var actionSequence = new cc.Sequence(spriteAction, spriteAction2);
        this.sprite.runAction(actionSequence);

        getNavBtns.call(this);

        return true;
    }
});
 
var Layer3Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(!SCENE2_INITIALIZE){
            // SCENE2_INITIALIZE = true;
            var layer = new Layer3();
            layer.setColor(cc.color("#472183"));
            this.addChild(layer);
        }
    }
});