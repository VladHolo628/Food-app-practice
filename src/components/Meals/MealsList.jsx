import React, { useEffect, useState } from "react";
import { MealItem } from "./MealItem";
import { meals } from "../../data/meals-data";
import { Card } from "../../layout/Card";

const URL = "https://react-http-fdd39-default-rtdb.firebaseio.com/Meals.json";

export const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      let mealsArr = [];
      try {
        setIsLoading(true);
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        const data = await response.json();
        for (let meal in data) {
          mealsArr.push({
            id: meal,
            name: data[meal].name,
            img: data[meal].img,
            price: data[meal].price,
            description: data[meal].description,
          });
        }
        setMeals(mealsArr);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsFailed(true);
      }
    };
    fetchMeals();
  }, []);

  const mealsContent = (
    <ul className="grid grid-cols-3 gap-4 content-center">
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem
              id={meal.id}
              img={meal.img}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          </li>
        );
      })}
    </ul>
  );

  return (
    <Card>
      <section>
        {isFailed && (
          <p className="text-2xl text-center">Something went wrong.</p>
        )}
        {isLoading && <p className="text-2xl text-center">Loading...</p>}
        {!isLoading && !isFailed && mealsContent}
      </section>
    </Card>
  );
};
