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
              className="flex flex-row gap-3 items-center"
            >
              <Image
                  src={`/images/MKM.png`}
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
        <div className="text-sm font-semibold mx-auto justify-center content-center text-center">
          Hi, this is KinCharge, your AI Assistant!
        </div>
        <div className="text-sm text-zinc-500 mx-auto justify-center content-center text-center">
          I help you maximize and supercharge your efficiency and satisfaction.{ " " }
          What can I assist you with today?{ " " }  
          (You can also get helped by{ " " }
          <Link href="https://agency.kincharge.com" target="_blank" className="underline">our agency</Link>{ " " } 
            and by{ " " }
          <Link href="https://offerings.kincharge.com" target="_blank" className="underline">our other offerings</Link>)
        </div>
        
        {user && <SidebarUserNav user={user} />}
      </SidebarFooter>
    </Sidebar>
  );
}
