class videoFunction{
    constructor(){
        videoFunction.prototype.injector = ['tool','vsOption','dom','template','v'];
    }

    init(){
        //this.initAudioList();
        //this.initBtn();
    }

    initBtn(){

    }

    play() {
        this.v.play();
        this.barStart();
        document.getElementById(this.dom.play).style.visibility = 'hidden';
        document.getElementById(this.dom.pause).style.visibility = 'visible';
    }

    pause() {
        this.v.pause();
        this.barStop();
        document.getElementById(this.dom.play).style.visibility = 'visible';
        document.getElementById(this.dom.pause).style.visibility = 'hidden';
    }

    next() {
        if (this.vsOption.random == true) {
            this.music = this.musicVal[this.tool.randomNum(0,(this.musicVal.length - +1))]
            this.initAudio();
        }else{
            if (this.musicVal.length == this.music.html_index) {
                this.music = this.musicVal[0];
                this.initAudio();
            } else {
                this.music = this.musicVal[this.music.html_index + +1];
                this.initAudio();
            }
        }
    }

    barStart() {
        let num;
        let buff;
        //更新进度条和时间
        this.bars = this.bars ? this.bars : (setInterval(() => {
            if (this.v.readyState && this.v.buffered.end(0) > 0) {
                num = this.v.currentTime / this.v.duration;
                buff = this.v.buffered.end(0) / this.v.duration;
                document.getElementById(this.dom.barNow).style.width = Number(num * 100).toFixed(2) + "%";
                document.getElementById(this.dom.barLoading).style.width = Number(buff * 100).toFixed(2) + "%";
                document.getElementById(this.dom.time).innerHTML = this.tool.timeFormat(this.v.currentTime) + " / " + this.tool.timeFormat(this.v.duration);
            }
        }, 10));
    }

    barStop() {
        clearInterval(this.bars);
        this.bars = false;
    }

    clickBar() {
        let e = event || window.event;
        let bar = document.getElementById(this.dom.bar);
        this.v.currentTime = this.v.duration * ((e.clientX - this.tool.leftDistance(bar)) / bar.clientWidth);
        this.play();
    }

    setVolume() {
        let e = event || window.event;
        let coverVolumeLine = document.getElementById(this.dom.coverVolumeLine);
        let coverVolume = document.getElementById(this.dom.coverVolume);
        let coverVolumeText = document.getElementById(this.dom.coverVolumeText);
        this.v.volume = (1 - ((e.clientY - this.tool.topDistance(coverVolume)) / coverVolume.clientHeight));
        this.v.volume = (this.v.volume > 0.9)?1:this.v.volume;
        coverVolumeLine.style.height = this.tool.percentFormat(this.v.volume);
        coverVolumeText.innerHTML = parseInt(this.v.volume * 100);
        //console.log(((e.clientX - Tool.leftDistance(this)) / this.clientWidth));
        //vsthis.play();
    }

    clickVolumeIcon() {
        //let coverVolumeIcon = document.getElementById(this.dom.coverVolumeIcon);
        let coverVolumeLine = document.getElementById(this.dom.coverVolumeLine);
        let coverVolumeText = document.getElementById(this.dom.coverVolumeText);
        if (this.v.volume > 0) {
            this.volume = this.v.volume;
            this.v.volume = 0;
            //coverVolumeIcon.classList.add("volume-off");
        } else {
            this.v.volume = this.volume ? this.volume : .8;
            //coverVolumeIcon.classList.remove("volume-off");

        }
        coverVolumeLine.style.height = this.tool.percentFormat(this.v.volume)
        coverVolumeText.innerHTML = parseInt(this.v.volume * 100);
    }

    full() {
        let element = document.getElementById(this.vsOption.element);
        if (this.onfull) {
            this.tool.exitFullscreen();
            this.onfull = false;
        }else{
            this.tool.FullScreen(element);
            this.onfull = true;
        }
    }

    speed(){
        this._.v.playbackRate = this.speed;
        this.dom[0].forEach(element => {
            element.style = '';
        });
        this.dom[1].style.color = '#03a9f4';
        this.dom[1].style.backgroundColor = '#e2e2e2';
    }
}


export default videoFunction;