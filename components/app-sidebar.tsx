'use client';

import type { User } from 'next-auth';
import { useRouter } from 'next/navigation';

import { PlusIcon } from '@/components/icons';
import { SidebarHistory } from '@/components/sidebar-history';
import { SidebarUserNav } from '@/components/sidebar-user-nav';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
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
} from "@/components/ui/alert-dialog";

export function AppSidebar({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row justify-between items-center">
            <Link
              href="/"
              onClick={() => {
                setOpenMobile(false);
              }}
              className="flex flex-row gap-1 items-center"
            >
              <Image
                  src={`/images/logo.png`}
                  alt={'KinCharge Logo Icon'}
                  width={40}
                  height={35}
                  className="rounded mx-0 px-0"
                />
              <span className="text-lg font-semibold ml-0 pl-0 pr-2 hover:bg-muted rounded-md cursor-pointer">
                KinCharge
              </span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="p-2 h-fit"
                  onClick={() => {
                    setOpenMobile(false);
                    router.push('/');
                    router.refresh();
                  }}
                >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent align="end">New Assist</TooltipContent>
            </Tooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarHistory user={user} />
      </SidebarContent>
      <SidebarFooter>
        <div className="text-sm text-zinc-500 mx-1">
          © 2025 KinCharge. All rights reserved.
        </div>
        <div className="text-sm text-zinc-500 mx-1">

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
                  
                  { `Get a Custom Artificial Intelligence System with all KinCharge AI System Capabilities and Functionalities (Assistance, Automation, Conversation, Text Generation, Text Analysis, Data Analysis, Document Analysis, Document/File Creation and Editing, Image and Video Analysis, Audio Analysis, Audio and Video Transcription, Image and Video Generation, Audio Generation, and more…).
` }
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
        
          { " | " }

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
                  KinCharge Agency helps you meet your needs and solve your problems with useful services offered by us and by our partners. 
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following services.
                  The main services we provide are: Artificial Intelligence Integration with Other Technological Systems, with Organizational Systems, and with Natural Systems and Natural Intelligence; All Technical/Technology Works and Services; Recruiting and Staffing; Training and Education. We also provide the following extra services: Sales and Purchases; Rentals; Bookings; Visas; Currency Exchange; Money Transfer; Refills/Recharges; Bills payments.
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
              Our Other Systems
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Other Systems</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge currently only provides KinCharge AI System, which is our main and flashship system. More systems will be added progressively.` }
                  <Link href="https://offerings.kincharge.com" target="_blank" className="underline hidden">our other systems</Link>                
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
              About Us
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">About KinCharge</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge's mission is to supercharge and maximize the world’s efficiency and satisfaction with artificial intelligence integrated with other technological systems, with organizational systems, and with natural systems and natural intelligence. In addition, KinCharge is committed to user/customer satisfaction, safety, security, and privacy, open source, open technologies and systems, technology and system maintenance and operation, innovation, technological progress, research, and education.` }                 
                <Link href="https://offerings.kincharge.com" target="_blank" className="underline hidden">our other offerings</Link>                
                </p>
                <br />
                <p>
                  KinCharge AI System currently has the following Capabilities: Search the web and summarize the web search result for you. Analyze and summarize documents, texts, images, videos, audios, and code for you. Generate, create, and edit documents, texts, images, videos, audios, and code for you. 
                  The first full version of KinCharge with more AI System capabilities and functionalities will be released on August 27th 2025 (advanced tasks, advanced assistance, advanced automation, and more…).
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

          { " | " }

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Privacy Policy
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Privacy Policy</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>

                  { `
Last Updated: July 16, 2025
Welcome to KinCharge (kincharge.com), an open-source AI System. This Privacy Policy explains how KinCharge collects, uses, and protects your information. We are committed to safeguarding your privacy and will progressively limit the use of third-party services that may not be open source, especially those known to abuse user privacy and data.
1. Information We Collect
KinCharge collects the following information directly from you when you use the app:
 * Names: To personalize your experience.
 * Email Addresses: For account creation, login, and communication.
 * Assistance History: A record of your interactions with the AI System. This history can be encrypted on demand by you.
2. How We Collect Information
We collect your data directly from you when you actively use the KinCharge application, such as during signup, login, and interaction with the AI System.
3. How We Use Your Information
We use the collected information solely to:
 * Provide you with the core functionalities of KinCharge, including AI System assistance.
 * Manage your account and chat history.
 * Improve your user experience within the application.
4. Sharing Your Information
KinCharge does not share your personal information (names, email addresses, assistance history) with anyone. Your data remains with KinCharge.
5. Data Control and Retention
You have full control over your data:
 * Access: You can access your stored information within the app.
 * Correction: You can correct your account details.
 * Deletion: You can delete your account and associated data at any time. Your data is retained until you decide to delete it.
6. Data Security
We implement robust security measures to protect your data:
 * Authentication: Secure user authentication processes.
 * Encryption: Your assistance history can be encrypted on demand by you, and we utilize encryption where appropriate to protect data in transit and at rest.
7. Cookies and Tracking Technologies
KinCharge does not use cookies or any similar tracking technologies.
8. Children's Privacy
While KinCharge does not impose age restrictions, we emphasize that parents should always monitor their children's use of online services, including KinCharge.
9. Changes to This Privacy Policy
We may update our Privacy Policy from time to time. We will notify you of any changes by email. Your continued use of KinCharge after such notification constitutes your acceptance of the updated policy.
                   ` }
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

          { " | " }

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              Terms of Use
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Terms of Use</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `
Last Updated: July 16, 2025
Welcome to KinCharge (kincharge.com), an open-source AI System. These Terms of Use govern your access to and use of the KinCharge web application. By accessing or using KinCharge, you agree to be bound by these Terms.
1. Primary Functionalities
KinCharge provides the following primary functionalities:
 * Signup and Login: Create and manage your user account.
 * Chat with the AI System: Interact with our AI System for various purposes.
 * Manage Chat/Assist History: View and manage your past conversations with the AI System.
2. Age Restrictions
There are no age restrictions for using KinCharge. However, users under the age of 18 are encouraged to use the service under parental guidance.
3. Prohibited Activities
You agree not to use KinCharge for any of the following prohibited activities:
 * Engaging in any illegal activities.
 * Distributing malware or any other harmful software.
 * Sending unsolicited communications (spamming).
 * Attempting to gain unauthorized access to KinCharge's systems or data.
 * Disrupting the integrity or performance of the KinCharge application.
 * Any activity that violates applicable laws or regulations.
4. User-Generated Content
Currently, KinCharge does not support user-generated content other than your interactions with the AI System, which are considered part of your assistance history.
5. Disclaimers and Limitations of Liability
KinCharge is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the service.
 * No Warranties: We do not guarantee that KinCharge will be error-free, uninterrupted, or secure. We disclaim all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
 * Third-Party Services: KinCharge may interact with or rely on third-party services. We are not responsible for the privacy practices, terms of use, or actions of any third-party services.
 * Limitation of Liability: To the fullest extent permitted by law, KinCharge and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the service; (b) any conduct or content of any third party on the service; (c) any content obtained from the service; and (d) unauthorized access, use or alteration of your transmissions or content.
6. Dispute Resolution
Any disputes arising out of or relating to these Terms or your use of KinCharge will be resolved through arbitration, in accordance with the laws of the appropriate country.
7. Changes to the Terms
We reserve the right to modify or replace these Terms at any time. We will notify you of any material changes by sending an email to the address associated with your account. Your continued use of KinCharge after such notification constitutes your acceptance of the updated Terms.
8. No Warranties or Guarantees
KinCharge is an open-source project and does not provide any warranties or guarantees regarding its performance, functionality, or suitability for any particular purpose.
                   ` }
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

          { " | " }

         <a href={`tel:‪+19298776893‬`} className="underline">Contact</a>
          
          { " | " } 
          
         <Link href="https://github.com/mkmkin/kincharge/tree/main" target="_blank" className="underline">Source Code</Link>
        
        </div>
        {user && <SidebarUserNav user={user} />}
      </SidebarFooter>
    </Sidebar>
  );
}
