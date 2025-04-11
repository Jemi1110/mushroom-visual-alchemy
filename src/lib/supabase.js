// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;  // Usamos import.meta.env
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;  // También con import.meta.env

export const supabase = createClient(supabaseUrl, supabaseKey);
