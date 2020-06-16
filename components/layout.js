import Head from "next/head";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { UserProvider } from "../lib/user";

export default ({ children, user, loading = false }) => (
    <UserProvider value={{ user, loading }}>
        <Head>
            <Meta />
        </Head>

        <header>
            <NavBar />
        </header>

        {children}

        <Footer />
    </UserProvider>
);
