TOTALLYLEGALMARKET — ACCOUNT + SHOWCASE BUILD
==============================================

This version keeps the existing mods and adds:
- Searchable MODS page
- SHOWCASES page
- Supabase email/password accounts
- Profile page
- User video uploads
- User's own showcase list
- Public approved showcase videos

SETUP
-----
1. Create a Supabase project at https://supabase.com/ .
2. Open SQL Editor and run setup.sql.
3. Open supabase-config.js and replace:
   https://YOUR-PROJECT.supabase.co
   YOUR_SUPABASE_ANON_KEY
   with your Supabase project URL and anon/public key.
4. Upload the whole folder to GitHub Pages.
5. In Supabase Authentication settings, add your website URL to the Site URL / redirect settings as needed.

IMPORTANT
---------
Only put the Supabase anon/public key in supabase-config.js. Never put a service_role/secret key in the site.

HOW USERS UPLOAD
----------------
Sign up -> LOGIN -> ACCOUNT -> UPLOAD -> choose a video -> upload.
The video goes into the public Supabase storage bucket named showcase-videos, and the showcase metadata is stored in the showcases table.

HOW TO ADD MODS
---------------
Edit mods-data.js. Add another object to window.TLM_MODS with id, name, description, category, status, and url.

CURRENT MODS PRESERVED
----------------------
001 RIGHTLADSGUN PACK -> original Google Drive link preserved.
002 ISISGRUNK'S WEAPON PACK -> preserved as unavailable because there was no download URL in the original site.
