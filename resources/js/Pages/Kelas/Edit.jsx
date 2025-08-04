import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({dataKelas}) {
    return (
        <Layout>
            <Form kelas={dataKelas} />
        </Layout>
    );
}
