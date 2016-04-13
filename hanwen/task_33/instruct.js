/**
 * Created by Administrator on 2016/4/13.
 */
function $(id) {
    return document.getElementById(id);
}
//var box = document.getElementsByClassName("box")[0]
//var td = box.parentNode;
//控制input的输入
function boxMove() {
    var instruct = document.getElementsByName("instruct")[0].value
    var cmd = instruct.toLocaleUpperCase();
    console.log(cmd);
    switch (cmd) {
        case "GO":
            goBox();
            break;
        case "TURN LEF":
            turnBox("left");
            break;
        case "TURN RIG":
            turnBox("right");
            break;
        case "TURN BAC":
            turnBox("back");
            break;
        default:
            alert("指令输入有误，请确认后再输入！");
            break;
    }
}
//控制盒子的移动方向
function goBox() {
    var box = document.getElementsByClassName("box")[0];
    var td = box.parentNode;
    console.log("goBox()")
    var direction = td.className;
    switch (direction) {
        case "right":
            move("right");
            break;
        case "left":
            move("left");
            break;
        case "top":
            move("top");
            break;
        case "bottom":
            move("bottom");
            break;
    }
}
function move(direction) {
    var box = document.getElementsByClassName("box")[0];
    var td = box.parentNode;
    var tr=td.parentNode;
    var tb=tr.parentNode;
    var trs=tb.childNodes;
    var index=findIndex();
    if (direction == "left") {
        if(index.x<4){
            alert("到底了 = = ！");
            return false;
        }
          var next=trs[index.y].childNodes[index.x-2]
    } else if (direction == "right") {
        if(index.x>20){
            alert("到底了 = = ！");
            return false;
        }
        var next=trs[index.y].childNodes[index.x+2]
        console.log(next);
    }else if(direction=="bottom"){
        if(index.y>18){
            alert("到底了 = = ！");
            return false;
        }
        var next=trs[index.y+2].childNodes[index.x]
        var next_parent=next.parentNode;
        next_parent.className=tr.className;
        tr.className="";
    }
    else if(direction=="top"){
        if(index.y<3){
            alert("到底了 = = ！");
            return false;
        }
        var next=trs[index.y-2].childNodes[index.x]
        var next_parent=next.parentNode;
        next_parent.className=tr.className;
        tr.className="";
    }
    var next_box = document.createElement('div');
    next.appendChild(next_box);
    next_box.className = box.className;
    next.className=td.className;
    td.className = "";
    td.removeChild(box);
}
//找到当前小盒子的位置
function findIndex(){
    var box = document.getElementsByClassName("box")[0];
    var td = box.parentNode;
    var tr=td.parentNode;
    var tb=tr.parentNode;
    var trs=tb.childNodes;
    var tds=tr.childNodes;
    var index=[];
    for(i=0;i<trs.length;i++){
        if(trs[i].className!=undefined&&trs[i].className!=""){
            index["y"]=i;
        }
    }
    for(i=0;i<tds.length;i++){
        if(tds[i].className!=undefined&&tds[i].className!=""){
            index["x"]=i;
        }
    }
    return index;
}
function changeClass(name) {
    var box = document.getElementsByClassName("box")[0];
    var td = box.parentNode;
    var tr=td.parentNode;
    var tb=tr.parentNode;
    var boxName = "box box-" + name;
    var tdName = name;
    console.log(td.className);
    box.className = boxName;
    td.className = tdName;
    tb.className = name;
}

function turnBox(direction) {
    var box = document.getElementsByClassName("box")[0];
    var td = box.parentNode;
    if (direction == "left") {
        switch (td.className) {
            case "top":
                changeClass("right");
                break;
            case "left":
                changeClass("top");
                break;
            case "right":
                changeClass("bottom");
                break;
            case "bottom":
                changeClass("left");
                break;
        }
    } else if (direction == "right") {
        switch (td.className) {
            case "top":
                changeClass("left");
                break;
            case "left":
                changeClass("bottom");
                break;
            case "right":
                changeClass("top");
                break;
            case "bottom":
                changeClass("right");
                break;
        }
    } else if (direction == "back") {
        switch (td.className) {
            case "top":
                changeClass("bottom");
                break;
            case "left":
                changeClass("right");
                break;
            case "right":
                changeClass("left");
                break;
            case "bottom":
                changeClass("top");
                break;
        }
    }
}