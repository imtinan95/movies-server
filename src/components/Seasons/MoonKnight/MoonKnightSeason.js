import { Link } from 'react-router-dom'

function MoonKnightSeason(props) {
  const { title, accessor } = props
  return (
    <div className="MovieBox">
      <Link to={`/seasons/moonknight/watch/${title}/${accessor}`}>
        <button className="MoonTitle button buttonEpi">{title}</button>
      </Link>
    </div>
  )
}

export default MoonKnightSeason
