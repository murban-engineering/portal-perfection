# Admin View: All Clients From One Password

Add an admin mode on the Portal page so staff can log in once and open any client's tank app without knowing each client's password or terminal location.

## What the user sees

1. On the Portal page, under the search bar, a "Login as Admin" link.
2. Clicking it shows a single password field (admin passkey).
3. Correct password -> an admin dashboard listing every client: name, terminal location (if any), and an "Open" button.
4. Clicking a client loads its app in the same full-screen iframe used today, with the navbar still visible.
5. From the app view, a "Back to all clients" control returns to the admin list. A "Log out" control returns to the normal portal search.
6. Wrong password shows an inline error.

The existing client flow (search -> terminal -> password -> app) is unchanged.

## Where the admin password lives

Stored in the backend so it can be changed later without a code change:

- New table `admin_settings` with a single row holding the admin password.
- Initial password: `MURBAN-ADMIN` (tell me if you want a different one and I'll seed that instead).
- The admin dashboard includes a "Change admin password" form (current password, new password, confirm) that updates the stored value.

## Technical notes

- Migration: `create table public.admin_settings (id uuid pk default gen_random_uuid(), password text not null, created_at, updated_at)`, plus `GRANT SELECT, UPDATE ... TO anon, authenticated`, `GRANT ALL ... TO service_role`, RLS enabled with public select + public update policies (same posture as the existing `clients` table), and the shared `update_updated_at_column` trigger. Seed one row.
- `src/pages/Portal.tsx`: extend the existing `Step` union with `admin-login`, `admin-list`, and `admin-reset`; reuse the current iframe branch by tracking whether the app view was entered as admin so "back" returns to the right screen.
- Admin list reuses the already-fetched `clients` state; no extra query.
- Styling reuses the existing `search-input`, pill buttons, and glass card patterns; no new design tokens.

## Security note

This matches the portal's current model: passwords are plaintext rows readable by anyone with the public API key, so the admin passkey is a convenience gate, not real security. If you want it hardened later, the right move is real accounts with hashed credentials and server-side checks — say the word and I'll plan that separately.
