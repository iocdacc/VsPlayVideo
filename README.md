# vsPlayVideo

美观的视频播放器
Video player

## 简介

1.暂时不支持手机端（未测试）  
2.W3C关于自动播放的政策 Chrome v66版本开始限制了单位时间内打开同一网页时自动播放的次数 超过次数时自动播放会报错 手动开始播放正常

## 演示地址

http://demo.iocdacc.com/vsPlayVideo

## 使用方法
```html
<head>

<script src="./dist/vsPlayVideo.min.js"></script>

</head>
<body>

...

<div id="vsPlayVideo"></div>

...

<script>
    var player = new vsPlayVideo({
        src:"https://www.runoob.com/try/demo_source/movie.ogg"
    });
</script>
</body>
```
