export interface Question {
    id: number;
    title: string;
    // The difficulty is between 1-3 to evaluate the question (so it is easier for the assistant to create quiz)
    difficulty: number;
    answers: [];
  }