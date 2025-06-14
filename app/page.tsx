"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Calendar, Icon, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { url } from "inspector";

export default function UnderConstructionPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative w-24 h-24 mx-auto mb-6">
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
              IM
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">Islam Mohamed</h1>
          <div className="flex items-center justify-center gap-1 text-blue-300">
            <Calendar className="h-4 w-4" />
            <p className="text-sm">Expected launch: Coming Soon</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Under Construction</h2>
          <p className="text-gray-300 mb-8">
            I'm currently building something amazing. My portfolio website is
            under development and will be available soon. Please check back
            later or contact me through the links below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-4 mb-8">
            {[
              {
                icon: <Github className="h-5 w-5" />,
                label: "GitHub",
                url: "https://github.com/Islam-mohamed-74",
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/islam-mohamed-038240210",
              },
              {
                icon: <Facebook className="h-5 w-5" />,
                label: "Email",
                url: "https://www.facebook.com/profile.php?id=100005927527262",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                label: "Email",
                url: "islam.mohamed.alrfa3i@gmail.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-slate-800 border-slate-700 hover:bg-slate-700 hover:text-blue-300 transition-all"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Button>
              </a>
            ))}
          </div>

          <motion.div
            className="w-full max-w-md"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            © {new Date().getFullYear()} Islam Mohamed. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
