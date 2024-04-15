import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
import LiveTimestamp from "../ui/LiveTimestamp";
import ChatBoxIcon from "../ui/ChatBoxIcon";

function Loading() {

    return (
        <>
            <article>
                <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>

                    <img className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md'
                             />
                    )
                    <div className='px-10'>
                        <h1 className='headerTitle px-0 no-underline pb-2'></h1>


                        <div className='flex divide-x-2 space-x-4'>
                            <h2 className='font-bold'></h2>
                            <h2 className='font-bold pl-4'></h2>
                            <p className='pl-4'></p>
                        </div>

                        <p className='pt-4'></p>
                    </div>

                </section>
            </article>

            <div className='fixed bottom-10 right-0 mt-4 mr-4'>


            </div>
        </>



    );
}

export default Loading;