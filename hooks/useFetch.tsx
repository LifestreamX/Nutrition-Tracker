// import React from 'react';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd490557a95msh167ea37417fd770p1dd8bejsnac444220d59b',
// 		'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
// 	}
// };

// export default async function useFetch(input: number | string) {
//   const res = await fetch(
//     `https://nutritionix-api.p.rapidapi.com/v1_1/search/${input}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat`,
//     options
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

// Second API
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '2830c53c40msh820653d53ecfc57p1ec3dcjsn6afd83e163fb',
//     'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
//   },
// };

// export default async function useFetch(input: number | string) {
//   const res = await fetch(
//     `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${input}`,
//     options
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch data ');
//   }

//   return res.json();

// }
