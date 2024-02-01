import React from 'react';
import Providers from '../Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms | nutrition tracker',
};

const Terms = () => {
  return (
    <Providers>
      <section className='flex flex-col justify-center items-center dark:bg-gray-900'>
        <div className='rounded-2xl dark:bg-gray-800 relative p-6 lg:p-20 lg:m-20'>
          <h1 className='relative text-3xl underline font-bold text-center'>
            Terms and Conditions of Use
          </h1>

          <div className='max-w-2xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Nutrition Tracker, you agree to comply with
              and be bound by these Terms of Service. If you do not agree with
              these terms, please refrain from using our Site and Service.
            </p>
          </div>

          <div className='max-w-2xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>2. Use of the Service</h2>
            <p>
              Nutrition Tracker is a nutrition tracking platform designed for
              personal use. You agree to use the Service only for lawful
              purposes and in compliance with all applicable laws and
              regulations. You are responsible for maintaining the security of
              your account and password. Nutrition Tracker cannot and will not
              be liable for any loss or damage from your failure to comply with
              this security obligation.
            </p>
          </div>

          <div className='max-w-2xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>3. User Content</h2>
            <p>
              You retain ownership of the content you submit to Nutrition
              Tracker, and you grant Nutrition Tracker a non-exclusive,
              worldwide, royalty-free license to use, copy, reproduce, process,
              adapt, modify, publish, transmit, display, and distribute your
              content for the purpose of providing and improving the Service.
              You agree not to submit content that is unlawful, defamatory,
              threatening, harassing, abusive, invasive of another's privacy, or
              otherwise objectionable.
            </p>
          </div>

          <div className='max-w-2xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>4. Privacy</h2>
            <p>
              Nutrition Tracker values your privacy. Our Privacy Policy, which
              will outline how we collect, use, and disclose information about
              you, is currently under development. Once completed, the Privacy
              Policy will be available at [Privacy Policy Link]. By using the
              Service, you consent to the practices described in the Privacy
              Policy.
            </p>
          </div>

          <div className='max-w-2xl my-10 p-5'>
            <h2 className='mb-5 text-lg'>5. Termination</h2>
            <p>
              Nutrition Tracker reserves the right to terminate or suspend your
              account and access to the Service at any time, without notice, for
              any reason, including if you violate these Terms of Service.
            </p>
          </div>

          <div className='max-w-2xl my-10 p-5'>
            <h2 className='mb-5 text-lg'>6. Changes to Terms</h2>
            <p>
              Nutrition Tracker may update these Terms of Service from time to
              time. It is your responsibility to check for updates. Continued
              use of the Service after any modifications to the Terms of Service
              constitutes your acceptance of such changes.
            </p>
          </div>

          <div className='max-w-2xl my-10 p-5'>
            <h2 className='mb-5 text-lg'>7. Contact Information</h2>
            <p>
              For any questions about these Terms of Service, please contact us
              at tylerallen@live.com.
            </p>
          </div>

          <div className='max-w-2xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>8. User Responsibilities</h2>
            <p>
              You are responsible for the accuracy and completeness of the
              information you provide to Nutrition Tracker. You acknowledge that
              the nutrition information provided by the Service is for general
              informational purposes only and should not be considered medical
              advice. It is recommended to consult with a healthcare
              professional or a registered dietitian for personalized advice.
            </p>
          </div>

          <div className='max-w-2xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>9. Prohibited Activities</h2>
            <p>
              You agree not to engage in any activity that may disrupt the
              functionality of Nutrition Tracker, including but not limited to
              hacking, data scraping, or attempting to gain unauthorized access
              to the Service. Any violation of these terms may result in the
              termination of your account and legal action.
            </p>
          </div>
        </div>
      </section>
    </Providers>
  );
};

export default Terms;
