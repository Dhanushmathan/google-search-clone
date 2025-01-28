import { FC } from "react";

interface Props {
    url: string,
    className?: string,
}

const Avatar: FC<Props> = ({ url, className }) => {
    return (
        <img src={url} className={`h-10 w-10 hover:bg-gray-400 rounded-full object-cover cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} loading="lazy" alt="Avatar" />
    )
}

export default Avatar;