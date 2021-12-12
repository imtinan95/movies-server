import { Link } from 'react-router-dom';

function Bighero6seasons(props) {
    const { title, accessor } = props;
    return (
        <div className="MovieBox">
            <Link to={`/seasons/bighero6/watch/${title}/${accessor}`}>
                <img
                    src={`/Seasons/BigHero6/web.Season.1/${title}/${accessor}.jpg`}
                    alt={`${title} Poster`}
                    height="400"
                />
            </Link>
            <p className="bighero6MovieTitle">{title}</p>
        </div>
    );
}

export default Bighero6seasons;
