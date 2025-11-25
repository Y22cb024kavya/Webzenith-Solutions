# Webzenith RBAC System

A production-ready Role-Based Access Control (RBAC) system built for the Webzenith Solutions technical assessment. This application demonstrates secure user management, granular permission enforcement, and real-time database integration.

## Features

### Security & Access Control
* **Full-Stack Enforcement:** Permissions are checked on the **Frontend** (UI elements hide/show) and **Backend** (Server Actions block unauthorized requests).
* **Middleware Protection:** Secure routes (like `/admin`) automatically redirect unauthorized users.
* **Secure Authentication:** Powered by Supabase Auth (Email/Password).

### Admin Capabilities
* **Role Management:** Create unlimited custom roles, rename them, and toggle their status (Active/Disabled).
* **Permission Matrix:** Interactive grid to toggle specific permissions (e.g., `leads.create`, `users.delete`) for any role.
* **User Management:** Create new users directly from the Admin panel and assign/change their roles instantly.

### Leads CRM (Demo Feature)
* **CRUD Operations:** A fully functional "Leads Management" dashboard.
* **Permission Awareness:**
    * **Admins** can Create, Read, Update, and Delete.
    * **Sales Managers** can Read and Update status, but cannot Create or Delete.
    * **Interns** have read-only access (or no access, depending on configuration).

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + shadcn/ui
* **Database:** Supabase (PostgreSQL)
* **State Management:** Server Actions + React Server Components

## Setup & Installation

### 1. Install Dependencies
```bash
pnpm install