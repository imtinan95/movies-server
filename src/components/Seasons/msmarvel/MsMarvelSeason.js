import { Link } from 'react-router-dom'

function MsMarvelSeason(props) {
  const { title, accessor } = props
  return (
    <div className="MovieBox">
      <Link to={`/seasons/msmarvel/watch/${title}/${accessor}`}>
        <button className="MsMarvelTitle button buttonEpi">{title}</button>
      </Link>
    </div>
  )
}

export default MsMarvelSeason
