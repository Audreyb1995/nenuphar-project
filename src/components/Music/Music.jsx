import './music.scss'

function Music() {
    return (
        <div className="music-container">
            <h1>MUSIC</h1>
            <div className='youtube-block'>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/Q-5eBChDHZ8?si=UElAdRv5bMiZ9OEk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/mb12zNreMAs?si=FnNzG6obzLlsdY0L" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/9tMVwefRedQ?si=ZUvZAHODXqBMFPnv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/-RNNk-M_4vw?si=ROVn2bNH8b5I6rrZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
    </div>
    )
}

export default Music