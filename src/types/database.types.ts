export type Json = 
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          created_at: string
          name: string
          url: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          url: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      keywords: {
        Row: {
          id: string
          created_at: string
          keyword: string
          project_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          keyword: string
          project_id: string
        }
        Update: {
          id?: string
          created_at?: string
          keyword?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keywords_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      keyword_rankings: {
        Row: {
          id: string
          checked_at: string
          keyword_id: string
          rank: number | null
          search_volume: number | null
        }
        Insert: {
          id?: string
          checked_at?: string
          keyword_id: string
          rank?: number | null
          search_volume?: number | null
        }
        Update: {
          id?: string
          checked_at?: string
          keyword_id?: string
          rank?: number | null
          search_volume?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_rankings_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}

// Helper-Typen für einfachere Verwendung in der Anwendung
export type Project = Database['public']['Tables']['projects']['Row'];
export type Keyword = Database['public']['Tables']['keywords']['Row'];
export type KeywordRanking = Database['public']['Tables']['keyword_rankings']['Row'];

