import Layout from "../../components/layout";
import { useFetchUser } from "../../lib/user";

const Myaccount = () => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user}>
            <Head>
                <title>Blog - Zebra Travel Agency</title>
            </Head>
        </Layout>
    );
};

export default Myaccount;
