import { useState } from "react";
import { Category } from "types";
import { END_POINTS, fetch } from "api";
import { Alert } from "react-native";

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = () => {
    fetch<{ data: Category[]; }>(END_POINTS.GET_CATEGORIES)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => Alert.alert("Error", JSON.stringify(error)));
  };

  return { categories, fetchCategories };
};