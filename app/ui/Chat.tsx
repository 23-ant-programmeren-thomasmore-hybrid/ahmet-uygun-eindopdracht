'use client'


import {SendHorizonalIcon} from "lucide-react";
import {useEffect, useRef} from "react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useChat} from "ai/react";
import { motion } from "framer-motion";

export default function Chat() {
    const ref = useRef<HTMLDivElement>(null)
    const { messages, input, handleInputChange, handleSubmit,isLoading } = useChat();

    useEffect(() => {
        if (ref.current === null) return
        ref.current.scrollTo(0, ref.current.scrollHeight)
    }, [messages])

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
        <section className='text-zinc-700  '>
            <div className='container flex max-h-screen flex-col items-center justify-center rounded-2xl bg-white '>
                <motion.h1 initial={{ opacity: 0, y: -50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1 }} className='font-serif text-2xl font-medium'>AI Chatbot </motion.h1>
                <div className='mt-4 w-full max-w-lg  '>
                    <ScrollArea
                        className='mb-2 h-[400px] rounded-md border p-1'
                        ref={ref}
                    >
                        {messages.map(m => (
                            <div key={m.id} className='mr-6 whitespace-pre-wrap md:mr-12'>
                                {m.role === 'user' && (
                                    <div className='mb-6 flex gap-3'>
                                        <Avatar>
                                            <AvatarImage src='' />
                                            <AvatarFallback className='text-sm'>U</AvatarFallback>
                                        </Avatar>
                                        <div className='mt-1.5'>
                                            <p className='font-semibold'>You</p>
                                            <div className='mt-1.5 text-sm text-zinc-500'>
                                                {m.content}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {m.role === 'assistant' && (
                                    <div className='mb-6 flex gap-3'>
                                        <Avatar>
                                            <AvatarImage src='' />
                                            <AvatarFallback className='bg-emerald-500 text-white'>
                                                AI
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className='mt-1.5 w-full'>
                                            <div className='flex justify-between'>
                                                <p className='font-semibold'>Bot</p>
                                            </div>
                                            <div className='mt-2 text-sm text-zinc-500'>
                                                {m.content}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ScrollArea>
                    <form onSubmit={handleSubmit} className='relative'>
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder='Ask me anything...'
                            className='pr-12 mb-5 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500'/>
                        <Button
                            size='icon'
                            type='submit'
                            variant='secondary'
                            disabled={isLoading}
                            className='absolute right-1 top-1 h-8 w-10'
                        >
                            <SendHorizonalIcon className='h-5 w-5 text-emerald-500'/></Button>
                    </form>
                </div>
            </div>
        </section>
        </motion.div>
    )
}