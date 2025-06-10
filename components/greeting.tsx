import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


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

        <Popover>
          <PopoverTrigger>
            <span className="underline">
              our agency
            </span>{ " " }
          </PopoverTrigger>
          <PopoverContent>
            Place content for the popover here.
            <Link href="https://agency.kincharge.com" target="_blank" className="underline">visit website</Link>
          </PopoverContent>
        </Popover>
        
        and by{ " " }
        
        <Popover>
          <PopoverTrigger>
            <span className="underline">
              our other offerings
            </span>)
          </PopoverTrigger>
          <PopoverContent>
            Place content for the popover here.
            <Link href="https://offerings.kincharge.com" target="_blank" className="underline">our other offerings</Link>
          </PopoverContent>
        </Popover>
      </motion.div>
    </div>
  );
};
