import css from "./Profile.module.css";
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={ css.profile }>
        <div className={ css.description }>
            <img
                src={avatar}
                alt="User avatar"
                className={ css.avatar }
            />
            <p className={ css.profileName }>{username}</p>
            <p className={ css.profileTag }>{tag}</p>
            <p className={ css.profileLocation }>{location}</p>
        </div>

        <ul className={ css.stats }>
            <li>
                <span className={ css.followersList }>Followers</span>
                <span className={ css.quantity }>{stats.followers}</span>
            </li>
            <li>
                <span className={ css.viewsList }>Views</span>
                <span className={ css.quantity }>{stats.views}</span>
            </li>
            <li>
                <span className={ css.likesList }>Likes</span>
                <span className={ css.quantity }>{stats.likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),

}