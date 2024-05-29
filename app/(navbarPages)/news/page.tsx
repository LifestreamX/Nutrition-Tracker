import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'News',
};

interface NewsItem {
  title: string;
  top_image: string;
  images: string[];
  videos: string[];
  url: string;
  date: string;
  short_description: string;
  text: string;
  publisher: Publisher;
}

interface Publisher {
  href: string;
  title: string;
}

async function getNewsData() {
  const url = 'https://newsnow.p.rapidapi.com/newsv2_top_news_cat';

  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
      'x-rapidapi-host': 'newsnow.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category: 'health',
      location: '',
      language: 'en',
      page: 1,
    }),
  };

  try {
    const res = await fetch(url, options);
    const text = await res.text();
    const result = JSON.parse(text);
    return result;
  } catch (error) {
    console.error(error);
  }
}

const News = async () => {
  const data = await getNewsData();

  return (
    <div className='sm:container mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center my-24'>
        Latest Health News
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        {data.news.map((article: NewsItem) => (
          <article
            // key={article.id}
            className='bg-white rounded-lg shadow-xl p-8 relative flex flex-col justify-between '
          >
            <h2 className='text-3xl font-semibold mb-4 '>{article.title}</h2>
            {article.top_image.endsWith('.ico') === false && (
              // Image
              <div className='mb-8'>
                <Image
                  src={article.top_image}
                  width={300}
                  height={300}
                  alt='Picture of the image'
                  className='rounded-xl'
                />
              </div>
            )}{' '}
            {/* Description */}
            <p className='text-gray-700 mb-12 text-lg'>
              {article.short_description}
            </p>
            {/* Date & LInk */}
            <div className=' '>
              <p className='text-gray-'>{article.date}</p>
              <a
                href={article.url}
                className='text-purple-900 hover:underline text-lg '
                target='_blank'
                rel='noopener noreferrer'
              >
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
