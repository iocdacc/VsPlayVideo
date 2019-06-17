export default {
    list:`
        <li class="vsPlayAudio-list" index={{html_index}}>
            <span class="vsPlayAudio-name">{{name}}</span>
            <span class="vsPlayAudio-author">{{author}}</span>
        </li>
    `,
    body: `
        <div id="vsPlayVideo" style="width: 500px;height: 280px;"><video src="https://www.runoob.com/try/demo_source/movie.ogg" style="width: 100%; height: 100%; background-color: rgb(51, 51, 51);"></video></div>
    `,
}