'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Shield } from "lucide-react";

// Accept 'role' as a prop
export function Navbar({ role }: { role?: string }) {
  const pathname = usePathname();
  
  if (pathname === "/login" || pathname === "/signup") return null;

  const isAdmin = role === 'Admin';

  return (
    <div className="w-full h-16 border-b bg-white flex items-center justify-between px-8 fixed top-0 left-0 z-50 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold text-slate-900">Webzenith RBAC</h1>
        </div>
        
        <div className="flex gap-4 ml-4">
          <Link href="/dashboard" className={`text-sm font-medium transition-colors ${pathname === '/dashboard' ? 'text-blue-600' : 'text-slate-600 hover:text-black'}`}>
            Dashboard
          </Link>
          
          {/* ONLY SHOW THIS LINK IF ADMIN */}
          {isAdmin && (
            <Link href="/admin" className={`text-sm font-medium transition-colors ${pathname === '/admin' ? 'text-blue-600' : 'text-slate-600 hover:text-black'}`}>
              Admin Matrix
            </Link>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-500 border px-2 py-1 rounded bg-slate-50">
          Role: <span className="font-bold text-slate-800">{role || "Loading..."}</span>
        </span>
        <form action="/api/auth/signout" method="post"> 
           {/* Note: In a real app we'd use a server action for logout, 
               but for now a link to login works as a 'soft' logout */}
           <Link href="/login">
            <Button variant="outline" size="sm">Logout</Button>
           </Link>
        </form>
      </div>
    </div>
  );
}