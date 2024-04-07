import React from 'react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
    news : NewsResponse ;
}
function NewsList({news} : Props) {
    return (

        <BentoGrid className="max-w-10xl max-h-10xl mx-auto">
            {news.data.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={<LiveTimestamp time={item.published_at}/>}
                        header={<img  src={item.image ? item.image : '../icon.png'}
                                      alt={item.title}

                                      className='max-h-32 w-full object-cover rounded-t-lg shadow-md'></img>}

                        icon={<ReadMoreButton article={item}/>}
                        className={i === 3 || i === 6 ? "md:col-span-2 bg-slate-100 dark:bg-slate-800" : "bg-slate-100 dark:bg-slate-800"}
                    />
            ))}
        </BentoGrid>
    );
}

export default NewsList;