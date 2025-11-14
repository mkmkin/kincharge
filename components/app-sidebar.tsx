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
            <span className="underline hidden">
              Custom AI Assistant
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">Custom AI Assistant</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p >
                  
                  { `
                      Order and get a Custom Artificial Intelligent Assistant (Application, Cloud Server, Local Server) with all KinCharge AI Assistance Capabilities and Functionalities: Advanced Assistance, Advanced Automation, Conversation, Text Generation, Text Analysis, Data Analysis, Document Analysis, Document/File Creation and Editing, Image and Video Analysis, Audio Analysis, Audio and Video Transcription, Image and Video Generation, Audio Generation, and more…
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
                <br />
                <p>
                  { `
                    KinCharge's mission is to supercharge and optimize the world’s efficiency, satisfaction, and wellness with eco-friendly, intelligent, community-driven, and open source technology services, products, and systems (artificial intelligence, informatics/information technology, electronics, mechatronics, and other technologies and systems). KinCharge Technology Agency Team works alongside KinCharge Tech Agency AI Assistant and KinCharge’s Partners to provide technology services, products, and systems to fulfill our community needs 24/7. 
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
        
          { " | " }

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline">
              What We Provide 
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">What KinCharge Provides</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge provides technology services, products, and systems to fulfill our community needs, 24/7. KinCharge Technology Agency Team works alongside KinCharge Tech Agency AI Assistant, and KinCharge's Partners for that.` }
                  <br />
                   <br />
                   KinCharge Technology Agency has a worldwide community with multiple agencies where technology services, products, and systems are provided to help the community fulfill their needs, 24/7, by our Tech Agency Team working alongside our Tech Agency AI Assistant and our Partners. 
                  You can{ " " }
                  <a href={`tel:‪+19298776893‬`} className="underline"> 
                  contact us
                  </a>{ " " } about any of the following services, products, and systems.                                    
                  <br />
                   The main technology services, products, and systems provided by KinCharge: 1) Artificial Intelligence 2) Integrated Systems 3) Information Technology, Informatics, Electronics, and Telecommunications 4) Mechatronics and Mechanics 5) Infrastructure, Construction, Electricity, Plumbing, Equipment... 6) Manufacturing, Customizing, Repair, Upgrading, Maintenance... 7) Waste Collection, Treatment, Disposal, and Recycling 8) Ecology, Open Source 9) Agriculture, Mining, and more… 
                  <br />
                   Complementary services and products provided by KinCharge: 1) Training, Education, Research 2) Recruiting and Staffing 3) Fitness, Wellness, Efficiency, Community, Satisfaction 4) Security, Safety, and Privacy 5) Sales and Purchases 6) Rentals and Bookings 7) Currency Exchange and Money Transfer 8) Refills/Recharges, Bills, and more…
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
        
          { " | " }

         <AlertDialog>
          <AlertDialogTrigger>
            <span className="underline hidden">
              Our Other Tech
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl">KinCharge Other Technonolies and Systems</AlertDialogTitle>
              <AlertDialogDescription className="text-lg max-h-80 overflow-y-scroll">
                <p>
                  { `KinCharge currently provides the following technologies and systems: AI Assistant, which includes an Application, a Cloud Server, and/or a Local Server, and AI Assistant R which includes an Application, a Cloud Server, and/or a Local Server. More technologies and systems will be added progressively.` }
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
Last Updated: November 10th, 2025
Welcome to KinCharge (kincharge.com), we are a technology agency, our website is an open-source AI System called KinCharge Tech Agency AI Assistant that works alongside our technology agency team to provide technology services, products, and systems to fulfill our community needs 24/7. This Privacy Policy explains how KinCharge collects, uses, and protects your information. We are committed to safeguarding your privacy and will progressively limit the use of third-party services that may not be open source, especially those known to abuse user privacy and data.
1. Information We Collect
KinCharge collects the following information directly from you when you use the app:
 * Names: To personalize your experience.
 * Email Addresses: For account creation, login, and communication.
 * Assistance History: A record of your interactions with the AI System. This history can be fully encrypted on demand by you.
2. How We Collect Information
We collect your data directly from you when you actively use the KinCharge Tech Agency AI Assistant, such as during signup, login, and interaction with the AI System.
3. How We Use Your Information
We use the collected information solely to:
 * Provide you with the core functionalities of KinCharge Tech Agency AI Assistant, including AI System assistance.
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
 * Encryption: For now your assistance history can be fully encrypted on demand by you, but we utilize encryption where appropriate to protect data in transit and at rest. Full encryption will be added soon.
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
Last Updated: November 10th, 2025
Welcome to KinCharge (kincharge.com), we are a technology agency, our website is an open-source AI System called KinCharge Tech Agency AI Assistant that works alongside our technology agency team to provide technology services, products, and systems to fulfill our community needs 24/7. These Terms of Use govern your access to and use of the KinCharge web application. By accessing or using KinCharge Tech Agency AI Assistant, you agree to be bound by these Terms.
1. Primary Functionalities
KinCharge Tech Agency AI Assistant provides the following primary functionalities:
 * Signup and Login: Create and manage your user account.
 * Chat with the AI System: Interact with our AI System for various purposes.
 * Manage Chat/Assist History: View and manage your past conversations with the AI System.
2. Age Restrictions
There are no age restrictions for using KinCharge Tech Agency AI Assistant. However, users under the age of 18 are encouraged to use the service under parental guidance.
3. Prohibited Activities
You agree not to use KinCharge Tech Agency AI Assistant for any of the following prohibited activities:
 * Engaging in any illegal activities.
 * Distributing malware or any other harmful software.
 * Sending unsolicited communications (spamming).
 * Attempting to gain unauthorized access to KinCharge's systems or data.
 * Disrupting the integrity or performance of the KinCharge application.
 * Any activity that violates applicable laws or regulations.
4. User-Generated Content
Currently, KinCharge Tech Agency AI Assistant does not support user-generated content other than your interactions with the AI System, which are considered part of your assistance history.
5. Disclaimers and Limitations of Liability
KinCharge Tech Agency AI Assistant is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the service.
 * No Warranties: We do not guarantee that KinCharge Tech Agency AI Assistant will be error-free, uninterrupted, or secure. We disclaim all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
 * Third-Party Services: KinCharge may interact with or rely on third-party services. We are not responsible for the privacy practices, terms of use, or actions of any third-party services.
 * Limitation of Liability: To the fullest extent permitted by law, KinCharge and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the service; (b) any conduct or content of any third party on the service; (c) any content obtained from the service; and (d) unauthorized access, use or alteration of your transmissions or content.
6. Dispute Resolution
Any disputes arising out of or relating to these Terms or your use of KinCharge Tech Agency AI Assistant will be resolved through arbitration, in accordance with the laws of the appropriate country.
7. Changes to the Terms
We reserve the right to modify or replace these Terms at any time. We will notify you of any material changes by sending an email to the address associated with your account. Your continued use of KinCharge Tech Agency AI Assistant after such notification constitutes your acceptance of the updated Terms.
8. No Warranties or Guarantees
KinCharge Tech Agency AI Assistant is an open-source project and does not provide any warranties or guarantees regarding its performance, functionality, or suitability for any particular purpose.
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
