import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

function Loading() {

    return (
        <BentoGrid className="max-w-10xl max-h-10xl mx-auto">
            {[...Array(18)].map((_, i) => (
                <div key={i} className="animate-pulse">
                    <Skeleton className="h-32 w-full bg-gray-200 rounded-t-lg"/>
                    <Skeleton className="h-8 w-full bg-gray-300 mt-2"/>
                    <Skeleton className="h-4 w-3/4 bg-gray-300 mt-1"/>
                </div>
            ))}
        </BentoGrid>



    );
}

export default Loading;