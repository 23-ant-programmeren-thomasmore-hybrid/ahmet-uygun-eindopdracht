'use client'
import {useRouter} from "next/navigation";
import { MdOutlineReadMore } from "react-icons/md";

type Props = {
    article: Article
};

function ReadMoreButton({article}: Props) {
    const router = useRouter();
    const handleClick = () => {
        const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
        const url = `/article?${queryString}`
        router.push(url);
    }
    return (
        <MdOutlineReadMore onClick={handleClick}
                           className='h-8 w-8  rounded-b-lg hover:bg-slate-200 dark:text-amber-50 dark:hover:bg-gray-800' />


    );
}

export default ReadMoreButton;