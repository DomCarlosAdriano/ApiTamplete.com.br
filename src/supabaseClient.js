import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kmoqqfbsvhehbydtrisw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imttb3FxZmJzdmhlaGJ5ZHRyaXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjA5NzYsImV4cCI6MjA2NTU5Njk3Nn0.4C4oAD3XjkLwxnpIuJ22_OO5Ibr01Pfjd_E27lxBRrM';

export const supabase = createClient(supabaseUrl, supabaseKey);