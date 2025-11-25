'use client'

import { useState } from "react";
import { createLead, updateLeadStatus, deleteLead } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, RefreshCw, Plus } from "lucide-react";

// We pass the data & permissions in as props so this component stays simple
export function LeadsManager({ leads, permissions }: { leads: any[], permissions: string[] }) {
  
  // Simple form state for creating
  const [newCompany, setNewCompany] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append("companyName", newCompany);
    formData.append("value", newValue);
    
    const res = await createLead(formData);
    if (!res.success) alert(res.error);
    else { setNewCompany(""); setNewValue(""); }
  };

  const handleUpdate = async (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'New' ? 'Contacted' : currentStatus === 'Contacted' ? 'Closed' : 'New';
    const res = await updateLeadStatus(id, nextStatus);
    if (!res.success) alert(res.error);
  };

  const handleDelete = async (id: string) => {
    if(!confirm("Are you sure?")) return;
    const res = await deleteLead(id);
    if (!res.success) alert(res.error);
  };

  const canCreate = permissions.includes('leads.create');
  const canUpdate = permissions.includes('leads.update');
  const canDelete = permissions.includes('users.delete'); // Using high-level perm

  return (
    <div className="space-y-6">
      
      {/* CREATE SECTION */}
      {canCreate ? (
        <div className="flex gap-2 items-end bg-slate-50 p-4 rounded border">
          <div className="grid gap-1 flex-1">
            <span className="text-xs font-medium">Company Name</span>
            <Input value={newCompany} onChange={e => setNewCompany(e.target.value)} placeholder="e.g. Wayne Corp" />
          </div>
          <div className="grid gap-1 w-24">
            <span className="text-xs font-medium">Value ($)</span>
            <Input value={newValue} onChange={e => setNewValue(e.target.value)} placeholder="5000" type="number" />
          </div>
          <Button onClick={handleCreate} className="bg-green-600 hover:bg-green-700 gap-2">
            <Plus className="w-4 h-4" /> Add
          </Button>
        </div>
      ) : (
        <div className="p-4 border border-dashed rounded text-center text-sm text-slate-400">
          You do not have permission to create leads.
        </div>
      )}

      {/* READ SECTION (LIST) */}
      <div className="grid gap-3">
        {leads.map((lead) => (
          <Card key={lead.id} className="flex items-center justify-between p-4">
            <div>
              <h4 className="font-bold text-slate-800">{lead.company_name}</h4>
              <div className="flex items-center gap-2 mt-1">
                {/* FIX: Handle null values safely with (lead.value || 0) */}
                <Badge variant="outline">${(lead.value || 0).toLocaleString('en-US')}</Badge>
                
                <Badge className={
                  lead.status === 'Closed' ? 'bg-green-500' : 
                  lead.status === 'Contacted' ? 'bg-blue-500' : 'bg-slate-500'
                }>
                  {lead.status}
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* UPDATE BUTTON */}
              {canUpdate && (
                <Button size="sm" variant="outline" onClick={() => handleUpdate(lead.id, lead.status)} title="Advance Status">
                  <RefreshCw className="w-4 h-4 text-blue-600" />
                </Button>
              )}
              
              {/* DELETE BUTTON */}
              {canDelete && (
                <Button size="sm" variant="destructive" onClick={() => handleDelete(lead.id)} title="Delete Lead">
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}