/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router'

function MoonKnightSeasonView(props) {
  const params = useParams()
  console.log(params)
  return (
    <div className="VideoContainer">
      <video controls preload="none">
        <source
          src={`/Seasons/Moon Knight/Season 1/${params.title}/${params.accessor}.mp4`}
          type="video/mp4"
        />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src={`/seasons/moon knight/season 1/${params.title}/${params.accessor}.vtt`}
          default
        />
      </video>
    </div>
  )
}

export default MoonKnightSeasonView
