import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ siswa, sekolahList }) {
    return (
        <Layout>
            <Form siswa={siswa} />
        </Layout>
    );
}
