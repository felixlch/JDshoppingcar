/**
 * Created by Felix on 2017/1/14.
 *
 * 定义recordPaint方法画图
 */
function recordPaint(Elem,Data){
    var datas =Data;
    var context = Elem.getContext('2d');
    const WIDTH = Elem.width;
    const HEIGHT = Elem.height;

    var padding = 20;
    var paddingLeft = 35;
    var paddingBottom = 20;

    var axisY = {
        x:paddingLeft,
        y:padding
    };

    var axisX = {
        x:WIDTH - padding,
        y:HEIGHT - paddingBottom
    };

    var origin ={  //原点坐标值
        x:paddingLeft,
        y:HEIGHT- paddingBottom
    };
/*
*绘制坐标轴
*
*/
    context.beginPath();
    context.moveTo(axisY.x,axisY.y);
    context.lineTo(origin.x,origin.y);
    context.lineTo(axisX.x,axisX.y);
    context.stroke();

    context.beginPath();
    context.moveTo(axisY.x-6,axisY.y+10);
    context.lineTo(axisY.x,axisY.y);
    context.lineTo(axisY.x+6,axisY.y+10);
    context.stroke();

    context.beginPath();
    context.moveTo(axisX.x-10,axisX.y+6);
    context.lineTo(axisX.x,axisX.y);
    context.lineTo(axisX.x-10,axisX.y-6);
    context.stroke();
    var month = {
        x:paddingLeft,
        y:HEIGHT-paddingBottom
    };
    context.font="10px 微软雅黑";
    context.textBaseline="top";  //对齐
    for(var i=1;i<=12;i++){
        context.fillText(i+"月",month.x,month.y);
        month.x+=(axisX.x-origin.x)/12;
    }

    maxdata =Math.max.apply(Math,datas);
    console.log(maxdata);

    var dataNum = {
        x:paddingLeft-5,
        y:padding
    };
    context.font="8px 微软雅黑";
    context.textAlign="right";  //对齐
    for(var i=1;i<=maxdata/500;i++){
        context.fillText(maxdata-500*(i-1),dataNum.x,dataNum.y);
        dataNum.y+=(origin.y-axisY.y)/maxdata*500;
    }
    context.beginPath();
    context.moveTo(origin.x,origin.y);
    for(var i=0;i<=11;i++){
        var x = (axisX.x-origin.x)/12+i*(axisX.x-origin.x)/12;
        var y = (3000-Data[i])/3000*(origin.y-axisY.y)+padding;
        context.lineTo(x,y);

    }
    context.stroke();
}