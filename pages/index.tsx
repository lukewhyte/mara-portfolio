import Head from 'next/Head';
import Layout, { siteTitle } from '../components/layout/layout';

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
