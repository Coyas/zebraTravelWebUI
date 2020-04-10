import Head from 'next/head'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Meta from '../components/Meta'

export default ({children, title = 'terrasystem ltd'}) => (
    <>
        <Head>
            <title>{title}</title>
            <Meta />
        </Head>

        <header>
            <NavBar />
        </header>

        {children}

        <Footer />
    </>
)