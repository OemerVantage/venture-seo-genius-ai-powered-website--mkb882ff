import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Keyword } from "@/types/database.types";

const fetchKeywords = async (projectId: string): Promise<Keyword[]> => {
  const { data, error } = await supabase
    .from('keywords')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching keywords:', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const useKeywords = (projectId: string) => {
  return useQuery<Keyword[], Error>({
    queryKey: ['keywords', projectId],
    queryFn: () => fetchKeywords(projectId),
    enabled: !!projectId, // Die Abfrage wird nur ausgeführt, wenn eine projectId vorhanden ist
  });
};

