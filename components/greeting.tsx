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
        Hi, this is KinCharge <br /> AI Assistant!

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

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              About KinCharge
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">About KinCharge</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge's mission is to supercharge and maximize the world’s efficiency, satisfaction, and wellness with eco-friendly, intelligent, community-driven, and open source technology services, products, and systems (artificial intelligence, informatics/information technology, electronics, mechatronics, and other technologies and systems).

KinCharge is committed to user/customer satisfaction, efficiency, wellness, safety, security, and privacy, open source, open technology and systems, sustainability, technology and systems engineering, development, operation, and maintenance, technological progress, research, and education.` }                 
                <Link href="https://offerings.kincharge.com" target="_blank" className="underline hidden">our other offerings</Link>                
                </p>
                <br />

                <p>
                  KinCharge Agency provides technology services, products, & systems to fulfill our community needs, 24/7, in collaboration with our partners.
                </p>
                <p>
                  KinCharge AI Assistant (Application, Cloud Server, Local Server) currently has the following Capabilities: Search the web and summarize the web search result for you. Analyze and summarize documents, texts, code, and images for you. Generate, create, and edit documents, texts, and code for you (image, video, and audio generation will be added soon). The first full version of KinCharge with more AI System capabilities and functionalities will be fully released by November 2025 (advanced tasks, advanced assistance, advanced automation, full encryption, and more…).‬
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
              <AlertDialogAction className="text-lg hidden">Go to KinCharge Offerings</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
         </AlertDialog>

        {" | "}

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Our Agency
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Agency</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  KinCharge Agency locations provide technology services, products, and systems to help the community fulfill their needs, in collaboration with our partners. 
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following technology services, products, and systems.
                  The main services, products, and systems we provide are: 1) Artificial Intelligence 

2) Integrated Systems  

3) Information Technology, Informatics, Electronics, and Telecommunications

4) Mechatronics and Mechanics

5) Infrastructure, Construction, Electricity, Plumbing, Equipment...

6) Manufacturing, Customization, Repair, Upgrading...

7) Waste Collection, Treatment, Disposal and Recycling

8) Ecology, Open Source

8) Agriculture, Mining, and more…

 We also provide the following complementary services/products: 1) Training, Education, Research

2) Recruiting and Staffing

3) Fitness, Wellness, Efficiency, Community, Satisfaction

4) Security, Safety, and Privacy 

5) Sales and Purchases

6) Rentals and Bookings

7) Currency Exchange and Money Transfer

8) Refills/Recharges, Bills, and more… </p>
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

        {" | "}

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              My Capabilities
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge AI Assistant Capabilities</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  KinCharge AI Assistance (Application, Cloud Server, Local Server) currently has the following Capabilities: Search the web and summarize the web search result for you. Analyze and summarize documents, texts, code, and images, for you. Generate, create, and edit documents, texts, and code for you (image, video, and audio generation will be added soon). The first full version of KinCharge with more AI Assistance capabilities and functionalities will be fully released by November 2025 (advanced tasks, advanced assistance, advanced automation, full encryption, and more…).
                  <br />
                  <br />
                  { `KinCharge's mission is to supercharge and maximize the world’s efficiency, satisfaction, and wellness with eco-friendly, intelligent, community-driven, and open source technology services, products, and systems (artificial intelligence, informatics/information technology, electronics, mechatronics, and other technologies and systems). [kincharge.com]

KinCharge is committed to user/customer satisfaction, efficiency, wellness, safety, security, and privacy, open source, open technology and systems, sustainability, technology and systems engineering, development, operation, and maintenance, technological progress, research, and education.` }                 
                  <Link href="https://agency.kincharge.com" target="_blank" className="underline hidden">Go to KinCharge Agency</Link>
                  <br />
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

        {" | "}  

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Get a Custom AI Assistant 
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">Get a Custom AI Assistant</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p >
                  Order and get a Custom Artificial Intelligent Assistant (Application, Cloud Server, Local Server) with all KinCharge AI Assistance Capabilities and Functionalities: Advanced Assistance, Advanced Automation, Conversation, Text Generation, Text Analysis, Data Analysis, Document Analysis, Document/File Creation and Editing, Image and Video Analysis, Audio Analysis, Audio and Video Transcription, Image and Video Generation, Audio Generation, and more…
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
        
        {" | "}

        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Our Other Tech
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Other Technologies and Systems</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge currently provides the following technologies and systems: AI Assistance which includes an Application, a Cloud Server, and/or a Local Server, and AI Assistance R which includes an Application, a Cloud Server, and/or a Local Server. More technologies and systems will be added progressively.` }
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


        <br />
        <br />
        <span className="">
          What can we assist you with today?
        </span>

      </motion.div>
    </div>
  );
};
