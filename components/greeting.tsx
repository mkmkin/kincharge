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
          Hi, we provide technology services and products to fulfill our community needs, 24/7, all over the world. Our Team Members work alongside our Partners and our AI Assistants for that.
        </span>

        <br />
        <br />
        <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              [More About Us]
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">About KinCharge</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <br />
                <p>
                  { `
                    KinCharge's mission is to supercharge and optimize the world’s efficiency, satisfaction, and wellness with eco-friendly, intelligent, community-driven, and open source technology services and products (artificial intelligence, informatics/information technology, electronics, mechatronics, and other technologies and systems). KinCharge Technology Agency Team Members work alongside KinCharge Tech Agency AI Assistants and KinCharge’s Partners to provide technology services, products, and systems to fulfill our community needs 24/7. 
                     ` } 
                <br />
                <br />
                KinCharge is committed to user/customer satisfaction, efficiency, wellness, safety, security, and privacy, open source, open technology and systems, sustainability, technology and systems engineering, development, operation, and maintenance, technological progress, research, and education.
                 <br />
                <br />
                Users/clients can contact us for more details at: ‪+1 (929) 877‑6893‬, contact@kincharge.com               
                <Link href="https://offerings.kincharge.com" target="_blank" className="underline hidden">our other offerings</Link>                
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
         <br />

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              [More About What We Provide]
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">What KinCharge Provides</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll text-center">
                <br />
                <p>
                  { `KinCharge provides technology services and products to fulfill our community needs, 24/7. KinCharge Technology Agency Team Members and Partners work alongside KKinCharge Tech Agency AI Assistants for that.` }
                   <br />
                   <br />
                   KinCharge Technology Agency has a worldwide community with multiple agencies where technology services and products are provided to help the community fulfill their needs, 24/7, by our Tech Agency Team Members and Partners working alongside our Tech Agency AI Assistants. 
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following services and products.                                    
                   <br />
                   <br />
                   The main technology services and products provided by KinCharge: <br /> 1) Artificial Intelligence <br /> 2) Integrated Systems <br /> 3) Information Technology, Informatics, Electronics, and Telecommunications <br /> 4) Mechatronics and Mechanics <br /> 5) Infrastructure, Construction, Electricity, Plumbing, Equipment... <br /> 6) Manufacturing, Customizing, Repair, Upgrading, Maintenance... <br /> 7) Waste Collection, Treatment, Disposal, and Recycling <br /> 8) Ecology, Open Source <br /> 9) Agriculture, Mining, and more… 
                   <br />
                   <br />
                   Complementary services and products provided by KinCharge: <br /> 1) Training, Education, Research <br /> 2) Recruiting and Staffing <br /> 3) Fitness, Wellness, Efficiency, Community, Satisfaction <br /> 4) Security, Safety, and Privacy <br /> 5) Sales and Purchases <br /> 6) Rentals and Bookings <br /> 7) Currency Exchange and Money Transfer <br /> 8) Refills/Recharges, Bills, and more…
                   <br />
                   <br />
                  KinCharge Tech Agency AI Assistant (Application, Cloud Server, Local Server) currently has the following Capabilities: Search the web and summarize the web search result for you. Analyze and summarize documents, texts, code, and images, for you. Generate, create, and edit documents, texts, and code for you (image, video, and audio generation will be added soon). The first full version of KinCharge Tech Agency AI Assistant with more AI Assistance capabilities and functionalities will be fully released by December 2025 (advanced tasks, advanced assistance, advanced automation, full encryption, and more…)
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
