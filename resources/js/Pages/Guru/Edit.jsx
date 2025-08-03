import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ guru, sekolahList }) {
    return (
        <Layout>
            <Form guru={guru} sekolahList={sekolahList} />
        </Layout>
    );
}
