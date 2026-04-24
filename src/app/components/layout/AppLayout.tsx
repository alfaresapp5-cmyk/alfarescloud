import { Outlet } from "react-router";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { Toaster } from "sonner";

export function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden" dir="rtl">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <main className="flex-1 flex flex-col min-w-0">
        <Topbar />

        <div className="flex-1 overflow-auto hide-scrollbar">
          <Outlet />
        </div>
      </main>

      <Toaster
        position="bottom-left"
        dir="rtl"
        toastOptions={{
          className: "rounded-xl",
          style: {
            fontFamily: '"IBM Plex Sans Arabic", sans-serif'
          }
        }}
      />
    </div>
  );
}
