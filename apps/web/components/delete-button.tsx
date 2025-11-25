'use client'

import { deleteDatabaseAction } from "@/app/dashboard/actions";
import { useState } from "react";

export function DeleteButton() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const result = await deleteDatabaseAction();
    setMessage(result.message);
    
    if (result.success) {
      alert("BOOM! Database deleted.");
    } else {
      alert("STOP! You are not allowed to do that.");
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 font-medium transition-colors"
      >
        ⚠️ Delete Entire Database
      </button>
      {message && <p className="mt-2 text-sm font-bold">{message}</p>}
    </div>
  );
}