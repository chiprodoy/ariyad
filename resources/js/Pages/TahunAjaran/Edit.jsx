import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ tahun_ajaran, sekolahList }) {
    return (
        <Layout>
            <Form tahun_ajaran={tahun_ajaran} />
        </Layout>
    );
}
