/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router';

function MovieView(props) {
    const params = useParams();
    const moviePath = `/movies/${params.title}/${params.accessor}.mp4`;
    const subPathVtt = `/movies/${params.title}/${params.accessor}.vtt`;
    const subPathSrt = `/movies/${params.title}/${params.accessor}.srt`;

    return (
        <div className="VideoContainer">
            <video controls preload="metadata" style={{ maxWidth: '100%' }}>
                <source src={moviePath} type="video/mp4" />
                <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src={subPathVtt}
                    default
                />
                <track
                    label="English (SRT)"
                    kind="subtitles"
                    srcLang="en"
                    src={subPathSrt}
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default MovieView;

