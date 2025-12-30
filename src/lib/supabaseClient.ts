import {createClient} from '@supabase/supabase-js'

const supabaseUrl =
    'https://ftpohltbmdpogjjsksfw.supabase.co'
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0cG9obHRibWRwb2dqanNrc2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNTE2NTksImV4cCI6MjA2NTYyNzY1OX0.KSOmukA0Pa_s86kh2dYPQDqC5MtnUW4UT_soxJG7EpY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
