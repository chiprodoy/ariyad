import Form from './Form';
import Layout from '@/Layouts/AdminLayout';

export default function Edit({ mata_pelajaran,kelompokList,jenisList }) {
    return (
        <Layout>
            <Form kelompokList={kelompokList} jenisList={jenisList} mataPelajaran={mata_pelajaran} />
        </Layout>
    );
}
