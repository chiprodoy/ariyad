import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ kelompok_mata_pelajaran }) {
    return (
        <Layout>
            <Form kelompok_mata_pelajaran={kelompok_mata_pelajaran} />
        </Layout>
    );
}
