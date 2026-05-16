import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://unzuslggmvsettwcetly.supabase.co/rest/v1/'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuenVzbGdnbXZzZXR0d2NldGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NjkzMzgsImV4cCI6MjA5NDQ0NTMzOH0.GKsKrmfIfELHxsGK-lGiwuNQAMdJSNEibhBqVyBBFT4'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)