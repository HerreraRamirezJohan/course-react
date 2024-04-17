import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './taildwind.css'

export function App() {
    const addAt = (username) => `@${username}`;
    return (
        <>
            <TwitterFollowCard
                formatUserName={addAt}
                username='willsmith'
                name='Normal Avatar'
            />
            <TwitterFollowCard
                formatUserName={addAt}
                username='willsmith'
                name='Normal Avatar 2'
            />
            <TwitterFollowCard
                formatUserName={addAt}
                username='willsmith'
                name='Normal Avatar 3'
            />
        </>
    )

}