"use client";

import * as React from "react";
import { BookOpen, Database, Dumbbell, Frame, FunctionSquare, LayoutDashboard, LifeBuoy, Map, PieChart, ProjectorIcon, Rocket, Send, Settings2, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Learning",
      url: "#",
      icon: SquareTerminal,
      items: [
        { title: "My Courses", url: "/learning/courses" },
        // { title: "My Bootcamp", url: "/learning/path" },
        { title: "Certificates", url: "/learning/certificates" },
        { title: "Points & Badge", url: "/learning/certificates" },
        // { title: "Event", url: "/learning/event" },
      ],
    },
    {
      title: "Showcase",
      url: "/dashboard",
      icon: ProjectorIcon,
    },
    {
      title: "Challenge",
      url: "/challenge",
      icon: Dumbbell,
    },
    {
      title: "Library",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Learning Path", url: "#" },
        { title: "Get Started", url: "#" },
      ],
    },
    {
      title: "Master Data",
      url: "#",
      icon: Database,
      items: [
        { title: "Courses", url: "/admin/master-data/courses" },
        { title: "Challenge", url: "/admin/master-data/challenge" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  // navSecondary: [
  //   {
  //     title: "Support",
  //     url: "#",
  //     icon: LifeBuoy,
  //   },
  //   {
  //     title: "Feedback",
  //     url: "#",
  //     icon: Send,
  //   },
  // ],
  // projects: [
  //   { name: "Design Engineering", url: "#", icon: Frame },
  //   { name: "Upcoming", url: "#", icon: Rocket },
  //   { name: "Dashboard", url: "#", icon: LayoutDashboard },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <FunctionSquare className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Metricfy</span>
                  <span className="truncate text-xs">Version 2.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
