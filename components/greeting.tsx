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
        KinCharge <br /> Technology Agency

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

        <span className="">
          Hi, we provide technology services, products, and systems to fulfill our community needs, 24/7, in collaboration with our partners.
        </span>

        <br />
        <br />
        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              About Us
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">About KinCharge</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge's mission is to supercharge and maximize the world’s efficiency, satisfaction, and wellness with eco-friendly, intelligent, community-driven, and open source technology products, services, and systems (artificial intelligence, informatics/information technology, electronics, mechatronics, and other technologies and systems).

KinCharge is committed to user/customer satisfaction, efficiency, wellness, safety, security, and privacy, open source, open technology and systems, sustainability, technology and systems engineering, development, operation, and maintenance, technological progress, research, and education.` }                 
                <Link href="https://offerings.kincharge.com" target="_blank" className="underline hidden">our other offerings</Link>                
                </p>
                <br />
                <p>
                  KinCharge AI Assistant (Application, Cloud Server, Local Server) currently has the following Capabilities: Search the web and summarize the web search result for you. Analyze and summarize documents, texts, code, and images for you. Generate, create, and edit documents, texts, and code for you (image, video, and audio generation will be added soon). The first full version of KinCharge with more AI System capabilities and functionalities will be fully released by November 2025 (advanced tasks, advanced assistance, advanced automation, full encryption, and more…).‬</p>
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
        
          { " | " }

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              What We Provide 
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Community</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  KinCharge community locations provide technology products and services that help the community fulfill their needs, in collaboration with our partners.
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following products and services.
                  The main product and services we provide are: 1) Artificial Intelligence 

2) Systems Engineering 

3) Information Technology, Informatics, Electronics, and Telecommunications

4) Mechatronics and Mechanics

5) Construction, Prefab, Self-Sufficiency, Electricity, Plumbing, Equipment…

6) Manufacturing and Customization 

7) Waste Collection, Treatment, Disposal and Recycling

8) Ecology, Open Source

8) Agriculture, Mining, and more…

 We also provide the following extra products and services: 1) Training and Education

2) Recruiting and Staffing

3) Fitness, Wellness, Efficiency, Satisfaction

4) Security, Safety, and Privacy 

5) Sales and Purchases

6) Rentals and Bookings

7) Currency Exchange and Money Transfer

8) Refills/Recharges, Bills, and more…

                </p>
                <p>
                  <Link href="https://agency.kincharge.com" target="_blank" className="underline hidden">Go to KinCharge Agency</Link>
                   <br className="hidden"/>
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                     Contact Us
                  </a>
                   <br />
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg hidden">Go to KinCharge Agency</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
         </AlertDialog>

         { " | " }

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              What We Provide 
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Community</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  KinCharge community locations provide technology products and services that help the community fulfill their needs, in collaboration with our partners.
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following products and services.
                  The main product and services we provide are: 1) Artificial Intelligence 

2) Systems Engineering 

3) Information Technology, Informatics, Electronics, and Telecommunications

4) Mechatronics and Mechanics

5) Construction, Prefab, Self-Sufficiency, Electricity, Plumbing, Equipment…

6) Manufacturing and Customization 

7) Waste Collection, Treatment, Disposal and Recycling

8) Ecology, Open Source

8) Agriculture, Mining, and more…

 We also provide the following extra products and services: 1) Training and Education

2) Recruiting and Staffing

3) Fitness, Wellness, Efficiency, Satisfaction

4) Security, Safety, and Privacy 

5) Sales and Purchases

6) Rentals and Bookings

7) Currency Exchange and Money Transfer

8) Refills/Recharges, Bills, and more…

                </p>
                <p>
                  <Link href="https://agency.kincharge.com" target="_blank" className="underline hidden">Go to KinCharge Agency</Link>
                   <br className="hidden"/>
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                     Contact Us
                  </a>
                   <br />
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-lg">Go Back to KinCharge</AlertDialogCancel>
              <AlertDialogAction className="text-lg hidden">Go to KinCharge Agency</AlertDialogAction>
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
