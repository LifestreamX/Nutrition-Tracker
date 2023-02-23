import React from 'react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd490557a95msh167ea37417fd770p1dd8bejsnac444220d59b',
    'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
  },
};

async function fetchFood() {
  const res = await fetch(
    'https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat',
    options
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Search() {
  let { hits } = await fetchFood();

  return (
    <div>
      <ul>
        {hits.map((e) => {
          console.log(e.fields);
        })}
      </ul>
    </div>
  );
}
