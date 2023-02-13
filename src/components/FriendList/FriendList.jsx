import PropTypes from 'prop-types';
import css from "./Friend.module.css";


import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    // console.log(friends);
    return (<ul className={ css.friendList }>
        {friends.map(fr => (
            <FriendListItem
                key={fr.name}
                avatar={fr.avatar}
                name={fr.name}
                isOnline={fr.isOnline}
            />
        ))}
    </ul>
    );
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }
        )
    )
}