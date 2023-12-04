import { useState } from "react";
import { Question } from "types";
import { END_POINTS, fetch } from "api";
import { Alert } from "react-native";

export const useQuestion = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = () => {
    fetch<Question[]>(END_POINTS.GET_QUESTIONS)
      .then(response => setQuestions(response))
      .catch(error => Alert.alert("Error", JSON.stringify(error)));
  };

  return { questions, fetchQuestions };
};