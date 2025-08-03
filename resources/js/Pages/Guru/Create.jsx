import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Create({ sekolahList }) {
    return (
        <Layout>
            <Form sekolahList={sekolahList} />
        </Layout>
    );
}
