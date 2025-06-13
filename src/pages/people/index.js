import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/groupmembers';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

export default function PeopleHome() {
  return (
    <Layout>
      <Head>
        <title>Group Members | Water Resources Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Research Group Members"
          subtitle="Our team of researchers and students"
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
            {/* Flex container with image left and content right */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image container - left side */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-100 overflow-hidden shadow-sm">
                  <Image
                    src={pi.photo}
                    alt={pi.name}
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Content container - right side */}
              <div className="w-full md:w-2/3 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{pi.name}</h2>
                  <p className="text-blue-600 text-lg">{pi.position}</p>
                </div>
                
                <div className="prose prose-sm text-gray-600">
                  <p className="font-medium">Research Interests:</p>
                  <p>{pi.researchInterests.join(', ')}</p>
                </div>

                <div className="pt-2">
                  <Link href={`/people/${pi.id}`} passHref legacyBehavior>
                    <Button as="a" className="w-full md:w-auto">
                      View Full Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Button grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button href="/people/phd" variant="outline" className="py-4">
              PhD Scholars
            </Button>
            <Button href="/people/masters" variant="outline" className="py-4">
              Master Students
            </Button>
            <Button href="/people/interns" variant="outline" className="py-4">
              Interns
            </Button>
            <Button href="/people/alumni" variant="outline" className="py-4">
              Alumni
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}