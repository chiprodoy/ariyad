import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ kompetensi, mata_pelajarans }) {
    return (
        <Layout>
            <Form kompetensi={kompetensi} mata_pelajarans={mata_pelajarans} />
        </Layout>
    );
}
