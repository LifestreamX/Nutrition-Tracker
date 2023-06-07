// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'd490557a95msh167ea37417fd770p1dd8bejsnac444220d59b',
//     'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com',
//   },
// };

// export default async function fetchNutritionData(input: number | string) {
//   const res = await fetch(
//     `https://nutritionix-api.p.rapidapi.com/v1_1/search/${input}?fields=old_api_id%2Citem_id%2Citem_name%2Cleg_loc_id%2Cbrand_id%2Cbrand_name%2Citem_description%2Cupdated_at%2Cnf_ingredient_statement%2Cnf_water_grams%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_saturated_fat%2Cnf_trans_fatty_acid%2Cnf_polyunsaturated_fat%2Cnf_monounsaturated_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_dietary_fiber%2Cnf_sugars%2Cnf_protein%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_dv%2Cnf_calcium_dv%2Cnf_iron_dv%2Cnf_refuse_pct%2Cnf_servings_per_container%20nf_serving_size_qty%2Cnf_serving_size_unit%2Cnf_serving_weight_grams%2Callergen_contains_milk%2Callergen_contains_eggs%2Callergen_contains_fish%2Callergen_contains_shellfish%2Callergen_contains_tree_nuts%2Callergen_contains_peanuts%2Callergen_contains_wheat%2Callergen_contains_soybeans%2Callergen_contains_gluten%2Cusda_fields`,
//     options
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '67dddd724emsha620b9ce2e425dbp193becjsn34afcd87544d',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
  },
};

export default async function fetchNutritionData(input: number | string) {
  const res = await fetch(
    `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${input}&nutrition-type=cooking&category%5B0%5D=generic-foods`,
    options
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
