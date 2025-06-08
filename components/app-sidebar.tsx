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
        <div className="text-sm text-zinc-500 mx-auto">
          © 2025 KinCharge. All rights reserved.
        </div>
        <div className="text-sm text-zinc-500 mx-auto">
          <Link href="https://agency.kincharge.com" target="_blank" className="underline">Our Agency</Link>
            { " | " }
          <Link href="https://offerings.kincharge.com" target="_blank" className="underline">Our Other Offerings</Link>
            { " | " }
          <Link href="https://about.kincharge.com" target="_blank" className="underline">About KinCharge</Link>
            { " | " } 
          <Link href="https://about.kincharge.com#privacy-policy" target="_blank" className="underline">Privacy Policy</Link>
            { " | " } 
          <Link href="https://about.kincharge.com#terms-of-use" target="_blank" className="underline">Terms of Use</Link>
            { " | " } 
          <Link href="https://about.kincharge.com#contact" target="_blank" className="underline">Contact</Link>
        </div>
        
        {user && <SidebarUserNav user={user} />}
      </SidebarFooter>
    </Sidebar>
  );
}
