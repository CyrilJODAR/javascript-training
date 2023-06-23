let stage;
let radius=150

export default function main(stg) {
    stage = stg;
    createBackGround()
    createPolyStar(200,200,"grey")
    createPolyStar(300,300,"red")

    return stage;
}
function createBackGround(){
    let gr = new createjs.Graphics()
    let bg = new createjs.Shape(gr)
    gr.beginFill('#ffffff').drawRect(0,0,stage.width,stage.height)

    stage.addChild(bg)
}
function createPolyStar(paramX, paramY, col){
    let gr = new createjs.Graphics()
    let ps = new createjs.Shape(gr);
    ps.pace = 10
    ps.canMove = false
    ps.x = paramX
    ps.y = paramY
    // ps.addEventListener("tick", onShurikenTick);
    // ps.addEventListener("click", onShurikenClick);
    ps.addEventListener('pressmove', onPressMove);
    gr.beginStroke("black").beginFill(col).drawPolyStar(0, 0, radius, 4, 0.6, 0)
    gr.beginStroke("black").beginFill("grey").drawCircle(0, 0, 20);
    stage.addChild(ps);
}
function onShurikenClick(e){
    let ps = e.currentTarget
    ps.canMove = !ps.canMove
}
function onShurikenTick(e){
    let ps = e.currentTarget
    if(!ps.canMove) return

    ps.rotation += 5;
    // ps.x+=ps.pace
            // ps.pace *= -1
    // if(ps.x>stage.width - radius){
    //     ps.y+=ps.pace
    //     ps.x = stage.width - radius
    // }
    // if(ps.y<=radius){
    //     ps.pace *= -1
    //     ps.x=ps.pace
    //     ps.y = radius
    // }
    // if(ps.x<=radius) {
    //     ps.pace *= -1
    //     ps.y+=ps.pace
    // }
}
function onPressMove(e){
    e.currentTarget.x = stage.mouseX
    e.currentTarget.y = stage.mouseY
}