import { createClient } from "./supabase/server";

export async function getUserPermissions() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return [];

  // 1. Get User's Role from DB
  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role_id')
    .eq('user_id', user.id)
    .single();

  if (!userRole) return [];

  // 2. Get Permissions for that Role from DB
  const { data: rolePermissions } = await supabase
    .from('role_permissions')
    .select('permissions ( slug )') 
    .eq('role_id', userRole.role_id);

  // 3. Return real permissions
  return rolePermissions?.map((rp: any) => rp.permissions.slug) || [];
}