'use client'

import { createContext, useContext } from "react";

type PermissionContextType = {
  permissions: string[];
};

const PermissionContext = createContext<PermissionContextType>({ permissions: [] });

export const usePermissions = () => useContext(PermissionContext);

export function PermissionProvider({ 
  permissions, 
  children 
}: { 
  permissions: string[], 
  children: React.ReactNode 
}) {
  return (
    <PermissionContext.Provider value={{ permissions }}>
      {children}
    </PermissionContext.Provider>
  );
}