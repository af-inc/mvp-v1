"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Wallet,
  Command,
  Frame,
  GalleryVerticalEnd,
  Inbox,
  PieChart,
  Settings2,
  Dashboard,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "Aide Funding.",
      logo: AudioWaveform,
      plan: "Personal",
    },
 
  ],
  navMain: [
    {
      title: "My Campaigns",
      url: "#",
      icon: GalleryVerticalEnd,
      isActive: true,
      items: [
        {
          title: "My Campaigns",
          url: "/dashboard/mycampaigns",
        },
        {
          title: "Donations",
          url: "/dashboard/donations",
        },
        
      ],
    },
    {
      title: "Wallet",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Crypto",
          url: "#",
        },
        {
          title: "Fiat",
          url: "#",
        },
      
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Wallet",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*<NavProjects projects={data.projects} />*/}
      </SidebarContent>
      <SidebarFooter>
        {/*<NavUser user={data.user} />*/}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
