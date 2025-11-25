export interface Role {
  id: string;
  name: string;
  is_enabled: boolean;
}

export interface Permission {
  id: string;
  slug: string;
  entity: string;
  action: string;
}

export interface User {
  id: string;
  email?: string;
  role_id?: string | null;
}