import videoFunction from "./videoFunction";
import init from "./init";
import config from "./config";
import template from "./template";
import tool from "./Tool";
import injector from "./injector";
import "../css/style.css";

class vsPlayVideo{
    constructor(option){
        init()

        //载入配置
        this.vsOption = option ? option : config.defaultOption;
        
        //未配置项填入默认配置
        for (let defaultKey in config.defaultOption) {
            if (!this.vsOption.hasOwnProperty(defaultKey)) {
                this.vsOption[defaultKey] = config.defaultOption[defaultKey];
            }
        }
        //document.getElementById(this.vsOption.element).appendChild(this.v);
        
        //载入模版
        //document.getElementById(this.vsOption.element).innerHTML = template.body;
        
        //获取DOM
        this.dom = config.dom(this.vsOption.element);
        //document.getElementById(this.dom.coverImg).src = coverImgSrc;

        //创建音频对象
        this.v = document.getElementById(this.dom.video)
        this.v.style.width = '100%';
        this.v.style.height = '100%';
        this.v.style.backgroundColor = '#333';
        this.v.controls = false;
        this.v.src = "https://www.runoob.com/try/demo_source/movie.ogg";
        
        //依赖注入
        injector.register("vsOption", this.vsOption);
        injector.register("dom", this.dom);
        injector.register("v", this.v);
        injector.register("tool", tool);
        injector.register("template", template);

        //装载方法
        this.af = injector.resolve(videoFunction);

        //初始化
        this.init();
    }

    init(){
        //this.af.init()//初始化
        this.bindEvent()//初始化绑定
    }

    bindEvent(){//绑定事件
        document.getElementById(this.dom.play).onclick = this.af.play.bind(this.af)
        document.getElementById(this.dom.pause).onclick = this.af.pause.bind(this.af)
        document.getElementById(this.dom.bar).onclick = this.af.clickBar.bind(this.af)
        document.getElementById(this.dom.coverVolume).onclick = this.af.setVolume.bind(this.af)
        document.getElementById(this.dom.full).onclick = this.af.full.bind(this.af)
        document.getElementById(this.dom.coverVolumeIcon).onclick = this.af.clickVolumeIcon.bind(this.af)

        let speedBtn = document.querySelectorAll(this.dom.speedBtn);
        speedBtn[0].onclick = this.af.speed.bind({'_':this.af,'dom':[speedBtn,speedBtn[0]],'speed':2})
        speedBtn[1].onclick = this.af.speed.bind({'_':this.af,'dom':[speedBtn,speedBtn[1]],'speed':1.5})
        speedBtn[2].onclick = this.af.speed.bind({'_':this.af,'dom':[speedBtn,speedBtn[2]],'speed':1.25})
        speedBtn[3].onclick = this.af.speed.bind({'_':this.af,'dom':[speedBtn,speedBtn[3]],'speed':1})
        speedBtn[4].onclick = this.af.speed.bind({'_':this.af,'dom':[speedBtn,speedBtn[4]],'speed':0.75})
        speedBtn[5].onclick = this.af.speed.bind({'_':this.af,'dom':[speedBtn,speedBtn[5]],'speed':0.5})

        document.getElementById(this.dom.video).onclick = () => {
            if (this.v.paused) {
                this.af.play();
            }else{
                this.af.pause();
            }
        }

        this.v.onpause = () => {
            document.querySelectorAll(this.dom.pendantPlay)[0].style.display = "block";
        }

        this.v.onplay = () => {
            document.querySelectorAll(this.dom.pendantPlay)[0].style.display = "none";
        }

        //播放结束时的事件
        this.v.onended = () => {
            this.af.pause();
            document.getElementById(this.dom.barNow).style.width = '100%';
            //this.af.next();
        }
    }
}


module.exports = vsPlayVideo;