import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <main className="relative">
        <Header props={session} />
        <div className="p-2">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </SessionProvider>
  );
}

export default MyApp;
