import React from 'react';
import Link from "next/link";

type Props = {
    category: string;
    isActive: boolean;
}

function NavLink({category, isActive}: Props) {
    return (
        <Link href={`/news/${category.toLowerCase()}`}
              className={`navLink ${isActive && "underline decoration-purple-400 underline-offset-4 font-bold text-lg"}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
    );
}

export default NavLink;