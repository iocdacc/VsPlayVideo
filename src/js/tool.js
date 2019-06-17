export default {
    hasClass: function(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    },
    //计算元素距离窗口左边的距离
    leftDistance: function(el) {
        let left = el.offsetLeft;
        let scrollLeft;
        while (el.offsetParent) {
            el = el.offsetParent;
            left += el.offsetLeft;
        }
        scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        return left - scrollLeft;
    },
    topDistance: function(el) {
        let Top = el.offsetTop;
        let scrollTop;
        while (el.offsetParent) {
            el = el.offsetParent;
            Top += el.offsetTop;
        }
        scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        return Top - scrollTop;
    },
    timeFormat: function(time) {
        let tempMin = parseInt(time / 60);
        let tempSec = parseInt(time % 60);
        let curMin = tempMin < 10 ? ('0' + tempMin) : tempMin;
        let curSec = tempSec < 10 ? ('0' + tempSec) : tempSec;
        return curMin + ':' + curSec;
    },
    percentFormat: function(percent) {
        return (percent * 100).toFixed(2) + '%';
    },
    //生成从minNum到maxNum的随机数
    randomNum: function(minNum,maxNum) {
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    },
    ajax: function(option) {
        option.beforeSend && option.beforeSend();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    option.success && option.success(xhr.responseText);
                } else {
                    option.fail && option.fail(xhr.status);
                }
            }
        };
        xhr.open('GET', option.url);
        xhr.send(null);
    },
    bindEvents: function(selector, handlers){ //绑定事件
        let el = document.getElementById(selector); //元素
        for (const event in handlers) {
            //使用值的时候保证键值对在对象中是存在的
            if (handlers.hasOwnProperty(event)) {
                //el.onclick(event, handlers[event]);
                el.onclick = handlers[event];
            }
        }
    },
    //进入全屏
    FullScreen: function (ele) {
        if (ele.requestFullscreen) {
            return ele.requestFullscreen();
        } else if (ele .mozRequestFullScreen) {
            return ele.mozRequestFullScreen();
        } else if (ele .webkitRequestFullScreen) {
            return ele.webkitRequestFullScreen();
        }
    },
    //退出全屏
    exitFullscreen: function (){
        let de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }
};