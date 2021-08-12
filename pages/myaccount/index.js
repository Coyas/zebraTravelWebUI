import Layout from "../../components/layout";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";

const Myaccount = () => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user}>
            <Head>
                <title>Blog - Zebra Travel Agency</title>
            </Head>
            <div>terrasystem</div>
        </Layout>
    );
};

export default Myaccount;
