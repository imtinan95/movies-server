/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router';

function Bighero6SeasonView(props) {
    const params = useParams();
    return (
        <div className="VideoContainer">
            <video controls>
                {/* /Seasons/BigHero6/web.Season.1? */}
                <source
                    src={`/Seasons/BigHero6/web.Season.1//${params.title}/${params.accessor}.mp4`}
                    type="video/mp4"
                />
                <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src={`/Seasons/BigHero6/web.Season.1//${params.title}/${params.accessor}.vtt`}
                    default
                />
            </video>
        </div>
    );
}

export default Bighero6SeasonView;
