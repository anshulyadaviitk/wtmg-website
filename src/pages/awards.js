import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { awards } from '@/content/awards';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import AwardsSection1 from '@/components/sections/AwardsSection1';

export default function Awards() {
  return (
    <Layout>
      <Head>
        <title>Awards | Recognitions</title>
      </Head>

      {/* Awards section */}
      <AwardsSection1 awards={awards} />
    </Layout>
  );
}
