import { ArrowUp, Briefcase, Code, Home, User } from "lucide-react";
import previewImage from "@/assets/preview.jpg";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import "@/components/ui/8bit/styles/retro.css";

// Menu items.
const items = [
  {
    title: "Top",
    url: "#top",
    icon: ArrowUp,
  },
  {
    title: "About",
    url: "#about",
    icon: Home,
  },
  {
    title: "Profile",
    url: "#profile",
    icon: User,
  },
  {
    title: "Skills",
    url: "#skills",
    icon: Code,
  },
  {
    title: "Projects",
    url: "#projects",
    icon: Briefcase,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      className={`${"retro"} border-r-4 border-foreground dark:border-ring bg-none!`}
      style={
        {
          "--sidebar-bg-image": `url(${previewImage})`,
        } as React.CSSProperties
      }
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
