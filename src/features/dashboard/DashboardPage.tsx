import { useKeywords } from "@/features/dashboard/hooks/useKeywords";
import { KeywordTable } from "@/features/dashboard/components/KeywordTable";

// Platzhalter für die Projekt-ID. In einer echten Anwendung würde diese
// dynamisch aus dem State oder der URL geladen.
const DUMMY_PROJECT_ID = "123e4567-e89b-12d3-a456-426614174000";

export default function DashboardPage() {
  // Annahme: Wir haben eine Projekt-ID, für die wir Keywords abrufen
  const { data: keywords, isLoading, isError, error } = useKeywords(DUMMY_PROJECT_ID);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Keyword Dashboard</h1>
        {/* Button zum Hinzufügen von Keywords wird in einem späteren Task implementiert */}
      </header>

      <section>
        {isLoading && <p>Lade Keywords...</p>}
        {isError && <p className="text-red-500">Fehler beim Laden der Keywords: {error.message}</p>}
        {keywords && keywords.length > 0 && <KeywordTable keywords={keywords} />}
        {keywords && keywords.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed rounded-lg">
            <h3 className="text-lg font-medium">Noch keine Keywords vorhanden</h3>
            <p className="text-sm text-gray-500 mt-1">Fügen Sie Ihr erstes Keyword hinzu, um das Monitoring zu starten.</p>
          </div>
        )}
      </section>
    </div>
  );
}

