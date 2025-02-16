"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/shadcn/switch";
import { Sun, Moon } from "lucide-react"; 

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <Sun className="w-6 h-6 m-2" />
      <Switch
        id="toggleTheme"
        onCheckedChange={handleThemeToggle}
        defaultChecked={resolvedTheme === "dark"}
        className="h-6"
      />
      <Moon className="w-6 h-6 m-2" />
    </div>
  );
}