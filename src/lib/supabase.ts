import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Submission = {
  id: string
  name: string
  phone: string
  message: string | null
  status: 'new' | 'contacted' | 'completed' | 'cancelled'
  created_at: string
  updated_at: string | null
}
