import React, {Suspense} from 'react';
import {notFound} from "next/navigation";
import LiveTimestamp from "../ui/LiveTimestamp";
import ChatBoxIcon from "../ui/ChatBoxIcon";
import Loading from "./loading";

type Props = {
    searchParams? : Article
}
function ArticlePage({searchParams} : Props) {


    const article:Article = searchParams!;
    return (
        <Suspense fallback={<Loading/>}>

                <article>
                    <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>
                        {article!.image && (
                            <img className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md'
                                 src={article!.image} alt={article!.title}/>
                        )}
                        <div className='px-10'>
                            <h1 className='headerTitle px-0 no-underline pb-2'>{article!.title}</h1>


                            <div className='flex divide-x-2 space-x-4'>
                                <h2 className='font-bold'>By : {article!.author}</h2>
                                <h2 className='font-bold pl-4'>Source: {article!.source}</h2>
                                <p className='pl-4'><LiveTimestamp time={article!.published_at}/></p>
                            </div>

                            <p className='pt-4'>{article!.description}</p>
                        </div>

                    </section>
                </article>

                <div className='fixed bottom-10 right-0 mt-4 mr-4'>

                    <ChatBoxIcon article={article}/>
                </div>


        </Suspense>



    );
}

export default ArticlePage;