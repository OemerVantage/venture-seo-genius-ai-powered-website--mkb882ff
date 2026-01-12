import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database.types';

// Wichtig: Diese Werte müssen in einer .env.local Datei hinterlegt werden
// Beispiel: VITE_SUPABASE_URL=https://your-project.supabase.co
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided in .env.local');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

