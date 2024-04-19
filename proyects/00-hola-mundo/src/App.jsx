import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './taildwind.css'

export function App() {
    const addAt = (username) => `@${username}`;
    return (
        <>
            <TwitterFollowCard
                initialIsFollowing={true}
                formatUserName={addAt}
                username='willsmith'
                name='Normal Avatar'
            />
            <TwitterFollowCard
                initialIsFollowing={true}
                formatUserName={addAt}
                username='willsmith'
                name='Normal Avatar 2'
            />
            <TwitterFollowCard
                initialIsFollowing={false}
                formatUserName={addAt}
                username='willsmith'
                name='Normal Avatar 3'
            />
        </>
    )

}