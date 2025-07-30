import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const Greeting = () => {
  return (
    <div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20 px-8 flex flex-col size-full justify-center"
    >

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold mx-auto justify-center"
      >
        <Image
                  src={`/images/logo.png`}
                  alt={'KinCharge Logo Icon'}
                  width={70}
                  height={70}
                  className="rounded mx-0 px-0 content-center"
                />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold mx-auto justify-center content-center text-center"
      >
        Hi, this is KinCharge <br /> Your AI System!

        <br />
        <br />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-zinc-500 mx-auto justify-center content-center text-center"
      >
        I help you maximize and supercharge your efficiency and satisfaction with the best of{ " " }
        
        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              My Capabilities
            </span>.
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge AI System Capabilities</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  KinCharge AI System currently has the following Capabilities: Search the web and summarize the web search result for you. Analyze and summarize documents, texts, images, videos, audios, and code for you. Generate, create, and edit documents, texts, and code for you (image, video, and audio generation will be added soon). 
                  The first full version of KinCharge with more AI System capabilities and functionalities will be released on August 27th 2025 (advanced tasks, advanced assistance, advanced automation, full encryption, and more…).
                </p>
                <p>
                  <Link href="https://agency.kincharge.com" target="_blank" className="underline hidden">Go to KinCharge Agency</Link>
                  <br className="hidden" />
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  Contact Us For More Details
                  </a> 
                   <br />
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg hidden">
                  <a href={`tel:‪+19298776893‬`} className=""> 
                     Contact Us
                  </a>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        { " " }  
        You can also get helped by a{ " " }

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Custom AI System
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">Custom AI System</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p >
                  Order and get a Custom Artificial Intelligence System with all KinCharge AI System Capabilities and Functionalities: Assistance, Automation, Conversation, Text Generation, Text Analysis, Data Analysis, Document Analysis, Document/File Creation and Editing, Image and Video Analysis, Audio Analysis, Audio and Video Transcription, Image and Video Generation, Audio Generation, and more…
                </p>
                <p>
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  Contact Us For More Details
                  </a> 
                  <br/>
                  <Link href="https://agency.kincharge.com" target="_blank" className="underline hidden">Website</Link>
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg hidden">Go to KinCharge Agency</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        
        { ", " }by{ " " }

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Our Other Systems
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Other Systems</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge currently provides the following systems: AI System, and AI System R. More systems will be added progressively.` }
                  <Link href="https://offerings.kincharge.com" target="_blank" className="underline hidden">our other offerings</Link>                
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg hidden">Go to KinCharge Offerings</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        { ", " }and by{ " " }

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Our Agency
            </span>.
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Agency</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  KinCharge Agency helps you meet your needs and solve your problems with useful services provided by us and by our partners. 
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following services.
                  The main services we provide are: 1) Artificial Intelligence Systems Integration with Other Technological Systems, Organizational Systems, Natural Systems, and Intelligent Beings; 2) All Technical/Technology Works and Services; 3) Recruiting and Staffing; 4) Training and Education. We also provide the following extra services: 1) Sales and Purchases; 2) Rentals; 3) Bookings; 4) Visas; 5) Currency Exchange; 6) Money Transfer; 7) Refills/Recharges; 8) Bills Payments.
                </p>
                <p>
                  <Link href="https://agency.kincharge.com" target="_blank" className="underline hidden">Go to KinCharge Agency</Link>
                  <br className="hidden" />
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  Contact Us
                  </a> 
                   <br />
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg mx-0 my-0 px-0 py-0 hidden">
                  <a href={`tel:‪+19298776893‬`} className="mx-0 my-0 px-0 py-0"> 
                     Contact Us
                  </a>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <br />
        <br />
        <span className="">
          What can I assist you with today?
        </span>

      </motion.div>
    </div>
  );
};
