import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    console.log(isOnline);
    return (
        <li className="item">            
            <span className={isOnline ? css.online : css.offline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
}