import "./globals.scss";
import Nav from "./components/Nav";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Todo App",
  description: "Simple todo app with login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Nav />
          <main>{children}</main>
          <footer>
            <p>© 2025 Create by Cihan U.</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
