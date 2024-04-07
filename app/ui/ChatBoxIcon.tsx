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
import { motion } from "framer-motion";
import {faRobot} from "@fortawesome/free-solid-svg-icons/faRobot";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ChatBoxIcon() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (




        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] "
        >

                <CollapsibleContent>
                    <Chat/>
                </CollapsibleContent>

            <div className="flex items-center justify-end space-x-4 px-4">
                <motion.button whileHover={{scale: 1.1}}
                               transition={{duration: 0.7}}
                               className="mt-4 rounded bg-purple-500 px-6 py-2 text-white">
                    <CollapsibleTrigger asChild>

                        {isOpen ?
                            <ChevronDown className="h-8 w-8"/>
                            :
                            <FontAwesomeIcon icon={faRobot} bounce className='text-2xl'/>

                        }

            </CollapsibleTrigger> </motion.button>
        </div>


</Collapsible>

)
    ;
}

export default ChatBoxIcon;