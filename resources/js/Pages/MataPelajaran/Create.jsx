import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Create({kelompokList,jenisList}) {
    return (
        <Layout>
            <Form kelompokList={kelompokList} jenisList={jenisList} />
        </Layout>
    );
}
