
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '67dddd724emsha620b9ce2e425dbp193becjsn34afcd87544d',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
  },
};

export default async function fetchNutritionData(input: number | string):Promise<any> {
  const res = await fetch(
    `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${input}&nutrition-type=cooking&category%5B0%5D=generic-foods`,
    options
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
