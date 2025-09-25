import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://rsnuhukehgukcsfhovek.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzbnVodWtlaGd1a2NzZmhvdmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MDA1OTksImV4cCI6MjA2ODM3NjU5OX0.QJpcIBnszNZszVeN5RAVSCMQR6DLToJrcOSz6pib3J4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
