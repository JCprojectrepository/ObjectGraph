"use client";
import { questionDetail } from '@/components/data/shindan/housework.data';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuizContextType {
  score: number;
  setScore: (newScore: number) => void;
  addScore: (points: number) => void;
  answeredQuestions: Set<number>;
  setAnsweredQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
  isAllQuestionsAnswered: () => boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const addScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const isAllQuestionsAnswered = () => {
    // 仮に全質問数が10だと仮定
    return answeredQuestions.size === questionDetail.numberOfQuestions;
  };

  return (
    <QuizContext.Provider value={{ score, setScore, addScore, answeredQuestions, setAnsweredQuestions, isAllQuestionsAnswered }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useQuiz must be used within a QuizProvider');
  return context;
};