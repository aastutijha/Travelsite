
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bgdzmxtpguulsgkzytov.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZHpteHRwZ3V1bHNna3p5dG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MjU3NjksImV4cCI6MjAzMzAwMTc2OX0.eH_UYi3Ks5r9-khZp0cIujP3LLYnyPhNrAcqjChWg0U'
export const supabase = createClient(supabaseUrl, supabaseKey);