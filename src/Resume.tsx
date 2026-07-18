import { motion } from "framer-motion";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/8bit/blocks/sidebar";
import { Avatar, AvatarImage } from "@/components/ui/8bit/avatar";
import { AvatarTip } from "@/components/ui/8bit/avatar-tip";
import avatar from "@/assets/avatar.png";
import avatar2 from "@/assets/avatar2.jpg";
import { Card, CardContent } from "@/components/ui/8bit/card";
import { PixelBackground } from "@/components/ui/8bit/pixel-background";
import PixelBorder from "./components/ui/8bit/pixel-border";
import { Separator } from "./components/ui/8bit/separator";
import "./components/ui/8bit/styles/retro.css";
import Timeline3 from "./components/ui/8bit/blocks/timeline3";
import { useState } from "react";

const Resume = () => {
  const projects = [
    {
      title: "resume on website",
      description:
        "the brief version of the resume. base information including name expected-occupation contact and self-introduction",
      icon: "P1",
      badge: "Done",
    },
  ];
  const [events] = useState(projects);
  return (
    <div className="min-h-screen bg-black text-white font-mono retro p-4 relative z-0">
      <PixelBackground />
      <PixelBorder />

      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarTrigger className="fixed top-2 left-4 z-50 transition-all duration-200 ease-linear peer-data-[state=expanded]:left-[9rem] text-white" />
        <main className="container mx-auto px-6 py-20" id="top">
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center border-[#737373] py-12 flex flex-col items-center justify-center gap-6"
            style={{
              backgroundImage: "url(/src/assets/pixelbg.png)",
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          >
            <div className="relative">
              <Avatar className="h-32 w-32" variant="pixel" flipImage={avatar}>
                <AvatarImage src={avatar2} alt="帅小伙" />
              </Avatar>
              <AvatarTip />
            </div>
            <div>
              <div className="flex flex-col items-center gap-4">
                <p
                  className="text-3xl font-bold border-2 border-white text-center px-4 py-2"
                  style={{ backgroundColor: "#050505" }}
                >
                  张皓博
                </p>
                <p
                  className="text-3xl font-bold border-2 border-white inline-block px-4 py-2"
                  style={{ backgroundColor: "#050505" }}
                >
                  前端开发工程师
                </p>
              </div>
            </div>
          </motion.section>

          <Separator className="my-10" />

          <Card className="mb-10 p-8" id="profile">
            <CardContent>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                个人简介
              </h2>
              <p className="text-2xl leading-relaxed text-gray-300">
                掌握 React 生态系统，专注于高性能 Web 应用构建、交互式 UI
                设计及可访问性优化。热衷于探索复古美学与现代 Web
                技术的结合，致力于打造极简、流畅且具独特视觉风格的产品。
              </p>
            </CardContent>
          </Card>
          <Separator className="my-10" />
          <Card className="p-8" id="skills">
            <CardContent>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                核心技能
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl font-bold">
                <div
                  className="border-4 p-6"
                  style={{ borderColor: "#737373", backgroundColor: "#050505" }}
                >
                  <h3 className="text-2xl mb-4">技术栈</h3>
                  <p className="text-gray-400">
                    TypeScript, React, Next.js, Vue
                  </p>
                </div>
                <div
                  className="border-4 p-6"
                  style={{ borderColor: "#737373", backgroundColor: "#050505" }}
                >
                  <h3 className="text-2xl mb-4">样式与UI</h3>
                  <p className="text-gray-400">
                    Tailwind CSS, Framer Motion, CSS Modules
                  </p>
                </div>
                <div
                  className="border-4 p-6"
                  style={{ borderColor: "#737373", backgroundColor: "#050505" }}
                >
                  <h3 className="text-2xl mb-4">开发工具</h3>
                  <p className="text-gray-400">Vite, Git</p>
                </div>
                <div
                  className="border-4 p-6"
                  style={{ borderColor: "#737373", backgroundColor: "#050505" }}
                >
                  <h3 className="text-2xl mb-4">其他能力</h3>
                  <p className="text-gray-400">性能优化, 响应式设计</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Separator className="my-10" />
          <div id="projects">
            <Timeline3
              title="Projects"
              description="there is the projects that i've done"
              events={events}
            ></Timeline3>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Resume;
