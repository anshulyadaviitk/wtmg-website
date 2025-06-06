// pages/contact.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact | Water Resources Research Group</title>
      </Head>

      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            Reach out to us for collaborations, student inquiries, or lab visits.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Contact Information</h2>

          <div className="grid gap-6 sm:grid-cols-1">
            {/* Email Card */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md space-x-4">
              <Mail className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">anshul.yadav@wr.iitr.ac.in</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md space-x-4">
              <Phone className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+91-9473583417 (Mobile)</p>
                <p className="text-gray-600">+91-1332-285617 (Office)</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md space-x-4">
              <MapPin className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Office Address</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  First floor, Department of Water Resources Development & Management,{"\n"}
                  Indian Institute of Technology Roorkee, Uttarakhand, India - 247667
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Visit Our Office</h2>
          <div className="overflow-hidden rounded-xl shadow-lg aspect-w-16 aspect-h-9">
            <iframe
              title="IIT Roorkee Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.3743663564924!2d77.89808!3d29.863372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzQ5LjAiTiA3N8KwNTMnNTMuOCJF!5e0!3m2!1sen!2sin!4v1629874599480!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
