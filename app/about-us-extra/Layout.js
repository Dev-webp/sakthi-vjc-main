import Footer from "../components/Footer"; // Adjust path if needed

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
