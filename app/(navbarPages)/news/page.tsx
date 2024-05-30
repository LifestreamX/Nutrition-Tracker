import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
//@ts-ignore
import NewsAPI from 'newsapi';

export const metadata: Metadata = {
  title: 'News',
};

interface NewsItem {
  title: string;
  top_image: string;
  url: string;
  date: string;
  short_description: string;
}

// interface NewsItem {
//   title: string;
//   top_image: string;
//   images: string[];
//   videos: string[];
//   url: string;
//   date: string;
//   short_description: string;
//   text: string;
//   publisher: Publisher;
// }

// interface Publisher {
//   href: string;
//   title: string;
// }

// async function getNewsData() {
//   const url = 'https://newsnow.p.rapidapi.com/newsv2_top_news_cat';

//   const options = {
//     method: 'POST',
//     headers: {
//       'x-rapidapi-key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
//       'x-rapidapi-host': 'newsnow.p.rapidapi.com',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       category: 'health',
//       location: '',
//       language: 'en',
//       page: 1,
//     }),
//   };

//   try {
//     const res = await fetch(url, options);
//     const text = await res.text();
//     const result = JSON.parse(text);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }

async function getNewsData() {
  const newsapi = new NewsAPI('a1ff8b8af6db41ea83f41bc015655d5c'); // Replace 'YOUR_API_KEY' with your actual NewsAPI key

  try {
    const response = await newsapi.v2.topHeadlines({
      category: 'health',
      language: 'en',
      country: 'us',
    });

    return response.articles.map(
      (article: {
        title: string;
        urlToImage: string;
        url: string;
        publishedAt: string;
        description: string;
      }) => ({
        title: article.title,
        top_image: article.urlToImage,
        url: article.url,
        date: article.publishedAt,
        short_description: article.description,
      })
    );
  } catch (error) {
    console.error(error);
  }
}

let obj = {
  title: 'Does lemon water help you lose weight? Experts weigh in - USA TODAY',
  top_image:
    'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/09/USAT/73631556007-getty-images-1309474558.jpg?crop=6015,3385,x0,y315&width=3200&height=1801&format=pjpg&auto=webp',
  url: 'https://www.usatoday.com/story/life/health-wellness/2024/05/28/does-lemon-water-help-you-lose-weight/73631501007/',
  date: '2024-05-29T14:41:37Z',
  short_description:
    "There's a belief that drinking lemon water can aid in weight loss. Is that true? Here's what a dietitian says.",
};

let obj2 = {
  title: '[Removed]',
  top_image: null,
  url: 'https://removed.com',
  date: '1970-01-01T00:00:00Z',
  short_description: '[Removed]',
};

const News = async () => {
  const data = await getNewsData();

  let filteredArticles = data.filter((article: NewsItem) => {
    return article.title !== '[Removed]';
  });

  return (
    <div className='sm:container mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center my-24'>
        Latest Health News
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        {filteredArticles.map((article: any) => (
          <article
            // key={article.id}
            className='bg-white rounded-lg shadow-xl p-8 relative flex flex-col justify-between '
          >
            <h2 className='text-3xl font-semibold mb-4 '>{article.title}</h2>
            {article.top_image !== null && (
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
