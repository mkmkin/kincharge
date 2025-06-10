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
        (You can also get helped by{ " " }
       
        <AlertDialog>
  <AlertDialogTrigger>
    <span class="underline">
      our agency
    </span>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        
        <Link href="https://agency.kincharge.com" target="_blank" className="underline">our agency</Link>{ " " } 
        and by{ " " }
        <Link href="https://offerings.kincharge.com" target="_blank" className="underline">our other offerings</Link>)
      </motion.div>
    </div>
  );
};
