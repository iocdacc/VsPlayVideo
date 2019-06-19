export default {
    defaultOption: {
        element: "vsPlayVideo",
        autoPlay: false,
        random: false,
        src:''
    },
    dom: (element) => {
        return {
            barNow: element + "-barNow",
            time: element + "-time",
            play: element + "-play",
            pause: element + "-pause",
            bar: element + "-bar",
            barLoading: element + "-barLoading",
            cover: element + "-cover",
            coverBox: element + "-cover-box",
            coverImg: element + "-cover-img",
            coverTitle: element + "-title",
            coverSinger: element + "-singer",
            coverUl: element + "-ul",
            coverVolume: element + "-volume",
            coverVolumeLine: element + "-volume-line",
            coverVolumeText: element + "-volume-text",
            coverMenuIcon: element + "-menu-icon",
            coverVolumeIcon: element + "-volume-icon",
            coverRandomIcon: element + "-random-icon",
            coverList: "." + element + "-list",
            full: element + "-full",
            speedBtn: "." + element + "-speed-btn",
            video: element + "-video",
            pendantPlay: "." + element + "-pendant-play",

        }
    }
}