"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMeals = async () => 
        {
        if (ingredient) 
            {
            const meals = await fetchMealIdeas(ingredient);
            setMeals(meals);
            }   
        };

    useEffect(() => {
        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-4">Meal Ideas</h1>
            <p className="text-2xl font-semibold text-white mr-4">Select an Ingredient</p>
            {ingredient && (
                <ul>
                    <p>Ingredient: {ingredient}</p>
                    {meals && meals.map((meal, index) => (
                        <li key={index} className="p-2 border border-gray-300 rounded shadow">
                            <p>{meal.strMeal}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

