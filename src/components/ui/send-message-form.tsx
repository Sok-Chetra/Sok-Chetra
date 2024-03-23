"use client";

import { messageScheme } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from "react-hook-form"
import { z } from 'zod';
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from './button';
import { Input } from './input';

export const SendMessageForm = () => {
   const formMessage = useForm<z.infer<typeof messageScheme>>({
      resolver: zodResolver(messageScheme),
      defaultValues: {
         message: "",
      },
   })

   function onSubmit(values: z.infer<typeof messageScheme>) {
      console.log(values)
   }

   return (
      <Form {...formMessage}>
         <form onSubmit={formMessage.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={formMessage.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                        <Input placeholder="Your Email" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={formMessage.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Send a Message</FormLabel>
                     <FormControl>
                        <Textarea className='min-h-32 md:min-h-52 resize-y' placeholder="Send me a message" {...field} />
                     </FormControl>
                     <FormDescription className='hidden md:block'>
                        You can resize the form by click on the bottom right corner.
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className='flex justify-center'>
               <Button type="submit" className='w-28'>Send</Button>
            </div>
         </form>
      </Form>
   )
}
