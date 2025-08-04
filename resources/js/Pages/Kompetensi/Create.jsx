import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Create({mata_pelajarans}) {
    return (
        <Layout>
            <Form mata_pelajarans={mata_pelajarans} />
        </Layout>
    );
}
