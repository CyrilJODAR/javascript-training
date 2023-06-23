let stage;
let radius=150

export default function main(stg) {
    stage = stg;
    createBackGround()
    createPolyStar()
    return stage;
}
function createBackGround(){
    let gr = new createjs.Graphics()
    let bg = new createjs.Shape(gr)
    gr.beginFill('#ffffff').drawRect(0,0,stage.width,stage.height)

    stage.addChild(bg)
}
function createPolyStar(){
    let gr = new createjs.Graphics()
    let ps = new createjs.Shape(gr);
    ps.pace = 10
    ps.canMove = false
    ps.x = 200
    ps.y = 200
    ps.addEventListener("tick", onShurikenTick);
    ps.addEventListener("click", onShurikenClick);
    gr.beginStroke("black").beginFill("orange").drawPolyStar(0, 0, radius, 4, 0.6, 0)
    gr.beginStroke("black").beginFill("white").drawCircle(0, 0, 20);
    stage.addChild(ps);

}
function onShurikenClick(e){
    let ps = e.currentTarget
    ps.canMove = !ps.canMove
}
function onShurikenTick(e){
    let ps = e.currentTarget
    if(!ps.canMove) return

    ps.rotation += 10;
    ps.x+=ps.pace
            // ps.pace *= -1
    if(ps.x>stage.width - radius){
        ps.y+=ps.pace
        ps.x = stage.width - radius
    } else if(ps.y>stage.height - radius){
        ps.x+=ps.pace
        ps.y = stage.height - radius
    }
    // if(ps.x<=radius) {
    //     ps.pace *= -1
    //     ps.y+=ps.pace
    // }
}