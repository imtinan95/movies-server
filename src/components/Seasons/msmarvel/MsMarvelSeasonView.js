/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router'

function MsMarvelSeasonView(props) {
  const params = useParams()
  console.log(params)
  return (
    <div className="VideoContainer">
      <video controls preload="none">
        <source
          src={`/Seasons/Ms. Marvel/Season 1/${params.title}/${params.accessor}.mp4`}
          type="video/mp4"
        />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src={`/seasons/Ms. Marvel/season 1/${params.title}/${params.accessor}.vtt`}
          default
        />
      </video>
    </div>
  )
}

export default MsMarvelSeasonView
