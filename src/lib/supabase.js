// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wlqwtclznlvwiuhqpqra.supabase.co'; // Copiado de tu panel de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscXd0Y2x6bmx2d2l1aHFwcXJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM0NzYxOSwiZXhwIjoyMDU5OTIzNjE5fQ.xuz6-UWzPncLSEWXJx6F_YktroSGkG6jQG5GS7r_i5w'; // También desde Supabase API

export const supabase = createClient(supabaseUrl, supabaseKey);
