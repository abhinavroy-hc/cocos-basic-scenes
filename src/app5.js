var SCENE2_INITIALIZE = false;

var Layer5 = cc.Layer.extend({
    sprite:null,
    text:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var layout = new ccui.Layout();
        layout.setLayoutType(ccui.Layout.LINEAR_VERTICAL);
        layout.sizeType = ccui.Widget.SIZE_PERCENT;
        layout.setSizePercent(cc.p(0.5, 0.5));
        layout.setPositionType(ccui.Widget.POSITION_PERCENT);
        layout.setPositionPercent(cc.p(0.25, 0.25));
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color("#472183"));

        var topDisplayText = new ccui.Text();
        topDisplayText.attr({
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            string: "Layout",
            fontName: "Arial",
            fontSize: 32,
        });

        var imageView = new ccui.ImageView();
        imageView.loadTexture(res.HelloWorld_png);
        imageView.setScale(0.5);
        
        
        layout.addChild(topDisplayText);
        layout.addChild(imageView)
        this.addChild(layout);

        getNavBtns.call(this);

        return true;
    }
});
 
var Layer5Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if(!SCENE2_INITIALIZE){
            // SCENE2_INITIALIZE = true;
            var layer = new Layer5();
            // layer.setColor(cc.color("#472183"));
            this.addChild(layer);
        }
    }
});