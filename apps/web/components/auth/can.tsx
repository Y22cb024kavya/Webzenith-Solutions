'use client'

import { usePermissions } from "./permission-provider";

export function Can({ 
  perform, 
  children,
  fallback = null // Optional: Show "Access Denied" text instead of null
}: { 
  perform: string; 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const { permissions } = usePermissions();

  // The Magic Check
  if (!permissions.includes(perform)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}