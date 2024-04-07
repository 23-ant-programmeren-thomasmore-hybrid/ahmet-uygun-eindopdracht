'use client'
import React, {useState} from 'react';
import {
    Collapsible,
        CollapsibleContent,
        CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {ChatBubbleLeftEllipsisIcon} from "@heroicons/react/24/solid";
import {ChevronDown} from "lucide-react";
import Chat from "./Chat";

function ChatBoxIcon() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (




        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] "
        >
            <CollapsibleContent className="fixed top-36 right-0 mt-4 mr-4">
                <Chat/>
            </CollapsibleContent>
            <div className="flex items-center justify-end space-x-4 px-4">
                <CollapsibleTrigger asChild>
                    <button >
                        {isOpen ?
                            <ChevronDown className="h-8 w-8"/>
                            :
                            <ChatBubbleLeftEllipsisIcon className="h-8 w-8" />


                        }
                    </button>
                </CollapsibleTrigger>
            </div>


        </Collapsible>

    );
}

export default ChatBoxIcon;