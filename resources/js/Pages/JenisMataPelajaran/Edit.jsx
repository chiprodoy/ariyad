import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ jenis_mata_pelajaran }) {
    return (
        <Layout>
            <Form jenis_mata_pelajaran={jenis_mata_pelajaran} />
        </Layout>
    );
}
