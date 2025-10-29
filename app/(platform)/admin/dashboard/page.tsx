export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard Administrator</h1>
      <p className="text-muted-foreground">Selamat datang di halaman dashboard. Hanya konten ini yang akan terlihat di area tengah!</p>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {/* <div className="bg-green-100/50 p-4 rounded-xl shadow-lg">Card 1</div>
        <div className="bg-blue-100/50 p-4 rounded-xl shadow-lg">Card 2</div>
        <div className="bg-red-100/50 p-4 rounded-xl shadow-lg">Card 3</div> */}
      </div>
      <div className="bg-gray-100/50 min-h-screen flex-1 rounded-xl p-6">Main Content Area</div>
    </>
  );
}
