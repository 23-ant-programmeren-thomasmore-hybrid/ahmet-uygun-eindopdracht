import React from 'react';
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../ui/NewsList";
import {categories} from "../../../constants";
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/solid";

type Props = {
    params: {category:Category}
}
async function NewsCategory({params:{category}}:Props) {
    const news : NewsResponse = await fetchNews(category)
    return (
        <div>
            <h1 className='headerTitle'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <NewsList news={news}/>


        </div>
    );
}

export default NewsCategory;

export async function generateStaticParams(){
    return categories.map(category=>({
        category:category
    }));
}