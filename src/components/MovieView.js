/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router';

function MovieView(props) {
    const params = useParams();
    return (
        <div className="VideoContainer">
            <video controls>
                <source src={`/Movies/${params.title}/${params.accessor}.mp4`} type="video/mp4" />
                <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src={`/Movies/${params.title}/${params.accessor}.vtt`}
                    default
                />
            </video>
        </div>
    );
}

export default MovieView;
