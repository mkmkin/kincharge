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
      className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col justify-center"
    >

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold mx-auto justify-center"
      >
        <Image
                  src={`/images/MKM.png`}
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
        Hi, this is KinCharge, your AI Assistant!
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-zinc-500 mx-auto justify-center content-center text-center"
      >
        I help you maximize and supercharge your efficiency and satisfaction.{ " " }
        What can I assist you with today?{ " " }  
        (You can also get help from{ " " }

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Our Marketplace
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Market</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                   { `KinCharge Market’s goal is to make it easier for everyone to find and/or sell any product or service imaginable all over the world.` }                 
                </p>
                <p>
                  <Link href="https://market.kincharge.com" target="_blank" className="underline">Go to KinCharge Market</Link>
                  <br/>
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  Contact Us
                  </a> 
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg hidden">Go to KinCharge Agency</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        
        { ", " }from{ " " }

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Our Other Offerings
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Other Offerings</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge currently offers the following products and services: KinCharge AI, KinCharge Search, and KinCharge Market.
                  More offerings will be added progressively.` }
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

        { ", " }and from a{ " " }

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Custom AI Integration 
            </span>)
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">Custom AI Integration</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p >
                  Get a custom artificial intelligence integration with all KinCharge AI features (AI Assistance, AI Automation, Conversational AI, Live Search from KinCharge Search, Text Generation, Audio and Video Transcription, Image and Video Generation, and more.
                </p>
                <p>
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  Contact Us
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

      </motion.div>
    </div>
  );
};
