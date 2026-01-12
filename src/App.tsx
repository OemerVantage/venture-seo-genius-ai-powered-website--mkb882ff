import DashboardPage from "@/features/dashboard/DashboardPage";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {/* Hier wird später das Routing und ein Hauptlayout eingefügt */}
      <main className="container mx-auto p-4 md:p-8">
        <DashboardPage />
      </main>
    </div>
  );
}

export default App;

