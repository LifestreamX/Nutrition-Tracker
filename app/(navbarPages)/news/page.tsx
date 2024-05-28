import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
};

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

const News: React.FC = async () => {
  const data = await getNewsData();
  console.log(data);

  const articles = [
    {
      id: 1,
      title: 'Breaking News: Market Hits All-Time High',
      description:
        'The stock market reached an all-time high today, driven by strong earnings reports and positive economic data.',
      url: 'https://example.com/article-1',
    },
    {
      id: 2,
      title: 'Tech Giant Announces New Product Line',
      description:
        'A leading tech company has announced a new line of innovative products set to launch next month.',
      url: 'https://example.com/article-2',
    },
    {
      id: 3,
      title: 'Local Community Event Draws Hundreds',
      description:
        'A local community event over the weekend drew hundreds of attendees, showcasing various local talents and businesses.',
      url: 'https://example.com/article-3',
    },
    {
      id: 4,
      title: 'Health Tips: How to Stay Fit During Winter',
      description:
        'Experts share their tips on how to maintain fitness and stay healthy during the colder months.',
      url: 'https://example.com/article-4',
    },
    {
      id: 5,
      title: 'New Study Reveals Climate Change Impact',
      description:
        'A recent study has revealed significant impacts of climate change on global weather patterns and ecosystems.',
      url: 'https://example.com/article-5',
    },
    {
      id: 6,
      title: 'Sports Update: Local Team Wins Championship',
      description:
        'The local sports team has won the championship, celebrating a hard-fought victory in the finals.',
      url: 'https://example.com/article-6',
    },
  ];

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center my-8'>Latest News</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {articles.map((article) => (
          <article
            key={article.id}
            className='bg-white rounded-lg shadow-lg p-8'
          >
            <h2 className='text-3xl font-semibold mb-4'>{article.title}</h2>
            <p className='text-gray-700 mb-4'>{article.description}</p>
            <a
              href={article.url}
              className='text-blue-500 hover:underline text-lg'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
