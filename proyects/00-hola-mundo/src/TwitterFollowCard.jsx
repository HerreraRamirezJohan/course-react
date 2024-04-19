import { useState } from "react";

export function TwitterFollowCard({ formatUserName, username, name, initialIsFollowing }) {
    // const state = useState(false);
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing ?
        "px-16 py-3 bg-transparent text-white border-white border-2 rounded-full hover:border-red-700 hover:text-red-700" :
        "px-16 py-3 bg-neutral-50 font-bold rounded-full hover:bg-black hover:text-white";
    return (
        <article className="
            flex 
            bg-slate-900 
            p-1 items-center 
            justify-between 
            space-x-5
            hover:bg-slate-700
            cursor-pointer
            ">
            <header className="flex">
                <img
                    className="w-14 rounded-full"
                    src={`https://unavatar.io/instagram/${username}`}
                    alt="avatar" />
                <div className="textContent flex flex-col justify-center mx-3">
                    <strong className="text-white">{name}</strong>
                    <span className="text-gray-400">{formatUserName(username)}</span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClass}
                    onClick={handleClick}
                >
                    {text}
                    <span className="hidden">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}