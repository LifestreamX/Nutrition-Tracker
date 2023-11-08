import React from 'react';
import Providers from '../Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms | nutrition tracker',
};

const Terms = () => {
  return (
    <Providers>
      <section className='flex flex-col justify-center items-center  dark:bg-gray-900    '>
        <div className='rounded-2xl  dark:bg-gray-800 relative p-6 lg:p-20 lg:m-20  '>
          <h1 className='relative text-2xl underline font-bold  text-center'>
            nutritiontracker Terms and Confitions of Use
          </h1>

          <div className='max-w-xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>1. Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nisi accusantium porro, recusandae cum, praesentium amet beatae
              dicta sit pariatur inventore labore possimus reprehenderit velit
              repudiandae consequatur reiciendis asperiores. Ex adipisci ea
              sequi laboriosam voluptates fugit velit consequuntur dignissimos
              hic aliquam quidem libero magni minus obcaecati rerum tempora
              magnam cupiditate optio amet, laudantium accusamus distinctio
              inventore iusto! Molestias, labore? Sapiente distinctio
              repudiandae rerum quibusdam qui ab suscipit ipsa quas cumque!
            </p>
          </div>

          <div className='max-w-xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>2. Lorem, ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              asperiores nemo tempore rerum hic sequi ab eos accusantium
              expedita velit fuga inventore aut obcaecati necessitatibus maxime
              consectetur minus ad corrupti repudiandae error consequatur. Omnis
              repellendus ducimus, commodi expedita iure rem deleniti nisi
              dolore error deserunt, tempora suscipit, modi inventore in.
            </p>
          </div>

          <div className='max-w-xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>
              3. Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              laborum facilis quia. Tempora dolores voluptates quisquam odio cum
              hic, totam quo error quod aliquid quas ipsam eaque reprehenderit
              minima assumenda nulla voluptatum exercitationem unde pariatur
              accusamus ut, quam soluta iusto! Maxime exercitationem tempora
              alias quae reprehenderit. Sit veritatis assumenda cupiditate at,
              natus excepturi, veniam iure, rem officiis debitis recusandae
              iste.
            </p>
          </div>
          <div className='max-w-xl mt-10 p-5'>
            <h2 className='mb-5 text-lg'>
              4. Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              eum commodi ipsum consequuntur facilis voluptate. Excepturi, ut
              animi perspiciatis maxime ducimus voluptate voluptatibus enim et
              dolor nam explicabo non assumenda modi consequuntur pariatur
              provident cupiditate illo numquam? Sit odit est explicabo delectus
              maxime. Quibusdam sunt incidunt exercitationem repellendus
              assumenda magni cupiditate deleniti ipsam deserunt culpa fuga
              facere fugit, laudantium optio hic quae distinctio delectus
              repudiandae beatae reprehenderit recusandae molestiae magnam!
              Aspernatur dolorem accusantium minima voluptates dicta autem sit
              praesentium nobis, velit, iure necessitatibus, fuga non obcaecati
              ab itaque sequi quisquam inventore? Non eos enim temporibus nam
              blanditiis reprehenderit quos unde?
            </p>
          </div>
          <div className='max-w-xl my-10 p-5'>
            <h2 className='mb-5 text-lg'>5. Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              tempore, modi distinctio cum nobis hic quis pariatur perferendis
              qui recusandae praesentium aut rerum ipsam unde ipsum! Ipsa
              debitis modi facere, quaerat animi ducimus optio distinctio eius,
              harum reiciendis assumenda, doloremque vero pariatur atque labore.
              Maiores facere eligendi recusandae, eveniet optio aliquam
              voluptates nostrum id, libero molestias quasi aliquid inventore
              incidunt minus adipisci quo quidem tempora distinctio numquam
              suscipit ea? Reprehenderit asperiores enim maxime voluptatibus,
              amet officia. Dolores repudiandae qui vitae accusamus placeat ex
              laborum, at modi consectetur, culpa provident suscipit?
            </p>
          </div>
        </div>
      </section>
    </Providers>
  );
};

export default Terms;
