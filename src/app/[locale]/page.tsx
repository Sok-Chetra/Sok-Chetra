

import { Button } from '@/components/ui/button';
import { SendMessageForm } from '@/components/ui/send-message-form';
import { SwitcherLang } from '@/components/ui/switcher-lang';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
const Image = dynamic(() => import('next/image'))

const skills = [
   {
      id: 1,
      name: "HTML"
   },
   {
      id: 2,
      name: "CSS"
   },
   {
      id: 3,
      name: "JavaScript"
   },
   {
      id: 4,
      name: "PHP"
   },
   {
      id: 5,
      name: "Laravel"
   },
   {
      id: 6,
      name: "React"
   },
   {
      id: 7,
      name: "NextJs"
   },
   {
      id: 8,
      name: "Git"
   },
   {
      id: 9,
      name: "Tailwind CSS"
   },
   {
      id: 10,
      name: "Bootstrap"
   },
   {
      id: 11,
      name: "Docker"
   },
]


export default function Home() {

   return (
      <div className='container mx-auto pb-10 overflow-x-hidden'>
         <div className='flex flex-col md:flex-row justify-center md:justify-start items-center space-y-5 h-screen'>
            <Image
               src={"./img/placeholder-profile.png"}
               alt='image'
               width={500}
               height={500}
               className='object-scale-down aspect-square rounded-2xl md:h-96 md:w-1/2'
               priority
            />
            <div className='w-full flex flex-col space-y-1.5 md:h-96 z-50'>
               <div className='flex justify-center md:justify-start'>
                  <h2 className='font-semibold lg:text-5xl text-4xl font-koho text-slate-900 dark:text-gray-100 text-center hidden md:block'>Hi!&nbsp;</h2>
                  <h2 className='font-semibold lg:text-5xl text-4xl font-koho text-slate-900 dark:text-gray-100 text-center'>
                     I&#39;m Sok Chetra
                  </h2>
               </div>
               <h3 className='text-gray-600 dark:text-gray-300 text-lg lg:text-xl text-center md:text-start'>
                  Junior Web Developer
               </h3>
               <div className='md:pt-5 hidden md:block'>
                  <p className="text-gray-700 dark:text-gray-200 text-lg lg:text-xl text-pretty">
                     I&#39;m dedicated to honing my skills and exploring the latest trends in Web Development. With a focus on Next.js, Tailwind CSS, and constantly seeking out new technologies, I strive to stay ahead of the curve in this ever-evolving field.
                  </p>
               </div>
               <div className='hidden md:flex justify-start items-end md:pt-5 h-full'>
                  <Button className="rounded-full px-8 py-7 text-xl font-semibold" asChild >
                     <Link href={"#about-me"}>
                        About Me
                     </Link>
                  </Button>
               </div>
            </div>
         </div>
         <div className='h-28' id="about-me">
            &nbsp;
         </div>
         <div className='h-auto flex'>
            <div className='flex flex-col space-y-5 md:w-3/6 md:h-96'>
               <h2 className='font-semibold lg:text-5xl text-4xl font-koho text-slate-900 dark:text-gray-100 text-center md:text-start'>
                  About Me
               </h2>
               <p className='text-lg lg:text-xl text-pretty text-gray-700 dark:text-gray-200 text-center md:text-start'>
                  Hi there! I&#39;m Sok Chetra, a 24 year old Junior Web Developer. Armed with a Computer Science degree from the Royal University of Phnom Penh, I&#39;ve been crafting immersive digital experiences since my second year. Specializing in technologies like Next.js, Tailwind CSS, Laravel, and TypeScript, I&#39;m passionate about ensuring responsiveness, enhancing functionality, and designing intuitive UI. Leveraging the power of Git for version control, I ensure seamless collaboration and efficient project management.
               </p>
            </div>
            <Image
               src={"./img/placeholder-profile.png"}
               alt='image'
               width={500}
               height={500}
               className='object-scale-down aspect-square rounded-2xl md:w-3/6 md:h-96 hidden md:block'
               priority
            />
         </div>
         <div id='experience' className='flex flex-col gap-10 pt-32 md:pt-52'>
            <h2 className='font-semibold lg:text-5xl text-4xl font-koho text-slate-900 dark:text-gray-100 text-start lg:text-center pb-10'>My Experience</h2>
            <div className='flex flex-col lg:flex-row w-auto h-suto lg:h-[750px] border-l-2 lg:border-0 border-slate-300 space-y-5 lg:space-y-0 '>
               <div className='w-full'>
                  <div className='flex justify-end pl-5 lg:pr-5 relative'>
                     <span className='w-5 h-5 bg-slate-400 rounded-full absolute -right-3 top-10 hidden lg:block'></span>
                     <div className='relative flex flex-col gap-3 lg:gap-5 max-w-full lg:max-w-[500px] p-3 lg:p-8 xl:p-10 border-2 border-slate-400 rounded-xl transition hover:lg:scale-105  hover:lg:-translate-x-5 ease-in-out duration-300 origin-left'>
                        <span className='w-5 h-5 bg-slate-400 rounded-full absolute -left-8 top-10 block lg:hidden'></span>
                        <div>
                           <div >
                              <h3 className='flex gap-0 xs:gap-1.5 lg:gap-3 items-center text-xs xs:text-sm lg:text-lg xl:text-xl'><strong className='text-base lg:text-xl xl:text-2xl'>Ztoa Group</strong>&nbsp;Jan 2022 - March 2022</h3>
                           </div>
                           <h3 className='text-sm lg:text-lg text-gray-600 dark:text-gray-300 text-start'>Web Developer Internship</h3>
                        </div>
                        <p className='text-sm lg:text-base text-pretty'>
                           This is my first time working as a Web Developer, where I&#39;ve successfully built websites and systems. Additionally, I&#39;ve gained insight into the MVC architecture, enhancing my understanding of backend development&#39;s organizational structure.
                        </p>
                     </div>
                  </div>
               </div>
               <div className='w-1 border-l-2 border-slate-300 hidden lg:flex justify-center'></div>
               <div className='w-full pl-5 lg:pr-5 flex items-end'>
                  <div className='flex gap-5 relative'>
                     <span className='w-5 h-5 bg-slate-400 rounded-full absolute -left-8 lg:-right-8 top-10'></span>
                     <div className=' flex flex-col gap-3 lg:gap-5 max-w-full lg:max-w-[500px] p-3 lg:p-8 xl:p-10 border-2 border-slate-400 rounded-xl transition hover:lg:scale-105 hover:lg:translate-x-5 ease-in-out duration-300 origin-right'>
                        <div>
                           <div >
                              <h2 className='flex gap-1.5 lg:gap-3 items-center text-xs xs:text-sm lg:text-lg xl:text-xl'><strong className='text-base lg:text-xl xl:text-2xl'>Ztoa Group</strong>&nbsp;March 2023 - March 2024</h2>
                           </div>
                           <h3 className='text-gray-600 dark:text-gray-300 text-start text-sm lg:text-lg'>Web Developer Junior</h3>
                        </div>
                        <p className='text-sm lg:text-base text-pretty'>
                           I possess extensive experience in developing websites for clients using Next.js, Tailwind CSS, and component libraries like Shadcn and MUI, ensuring responsiveness across various devices. Additionally, I&#39;m proficient in storing data with Hasura GraphQL, deploying projects using Docker, managing Nginx proxy for domain configuration, and utilizing Git for project management. Furthermore, I adeptly utilize Laravel or Next.js for building APIs to enhance project functionality.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
         <div id='skills' className='flex flex-col gap-10 pt-32 md:pt-52'>
            <h2 className='font-semibold lg:text-5xl text-4xl font-koho text-slate-900 dark:text-gray-100 text-center md:text-start'>
               My Skills
            </h2>
            <div className='flex gap-3 flex-wrap justify-center md:justify-start lg:w-4/6'>
               {skills.map((skill) => (
                  <Badge key={skill.id} variant="outline" className='text-lg border-slate-900 dark:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-slate-900 hover:bg-slate-900 hover:text-white'>{skill.name}</Badge>
               ))}

            </div>
         </div>
         <div className='flex flex-col gap-10 pt-32 md:pt-52'>
            <h2 id='contact-me' className='font-semibold lg:text-5xl text-4xl font-koho text-slate-900 dark:text-gray-100 text-center md:text-start'>Contact Me</h2>
            <pre className='text-center md:text-start text-gray-600 dark:text-gray-300 text-wrap'>
               You can contact me vai&nbsp;
               <Link href={"mailto:trasok9090@gmail.com"} className='underline underline-offset-2 font-semibold'>trasok9090@gmail.com</Link> or form below.
            </pre>
            <div>
               <SendMessageForm />
            </div>
            <p className='text-center text-gray-500 dark:text-gray-400'>or</p>
            <ul className="flex items-center justify-center gap-6">
               <li>
                  <Link href={"https://www.facebook.com/straa6/"} target="_blank">
                     <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.08 12.539c0-5.335-4.298-9.66-9.6-9.66-5.304.001-9.602 4.325-9.602 9.661 0 4.82 3.511 8.817 8.1 9.541v-6.75H8.542v-2.79h2.438v-2.13c0-2.421 1.434-3.758 3.627-3.758 1.05 0 2.149.188 2.149.188v2.376h-1.21c-1.192 0-1.564.745-1.564 1.51v1.812h2.661l-.425 2.791H13.98v6.75c4.59-.725 8.1-4.72 8.1-9.541Z"></path>
                     </svg>
                     <span className='sr-only'>facebook icon</span>
                  </Link>
               </li>
               <li>
                  <Link href={"https://www.linkedin.com/in/sok-chetra/"} target="_blank">
                     <svg width={35} height={35} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.875 2.625H4.125a1.5 1.5 0 0 0-1.5 1.5v15.75a1.5 1.5 0 0 0 1.5 1.5h15.75a1.5 1.5 0 0 0 1.5-1.5V4.125a1.5 1.5 0 0 0-1.5-1.5ZM9 16.5a.75.75 0 1 1-1.5 0v-6a.75.75 0 1 1 1.5 0v6Zm-.75-7.875a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm9 7.875a.75.75 0 1 1-1.5 0v-3.375a1.875 1.875 0 1 0-3.75 0V16.5a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 1.481-.169 3.375 3.375 0 0 1 5.269 2.794V16.5Z" />
                     </svg>
                     <span className='sr-only'>linkedin icon</span>
                  </Link>
               </li>
               <li>
                  <Link href={"https://t.me/tra_6"} target="_blank">
                     <svg width={35} height={35} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.684 2.971a1.51 1.51 0 0 0-1.528-.253L2.85 9.515a1.481 1.481 0 0 0-.947 1.528 1.5 1.5 0 0 0 1.2 1.34l4.397.873v5.493a1.5 1.5 0 0 0 2.56 1.06l2.437-2.428 3.684 3.243a1.5 1.5 0 0 0 2.1-.11 1.49 1.49 0 0 0 .356-.677l3.525-15.394a1.5 1.5 0 0 0-.478-1.472ZM17.174 19.5 9.45 12.702l11.128-8.034-3.403 14.831Z" />
                     </svg>
                     <span className='sr-only'>telegram icon</span>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}
