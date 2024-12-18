import { create } from 'zustand'
import { Question } from '../interface/question'

interface State {
  questions: Question[]
  currentQuestion: number
  currentTopic: string
  fetchQuestions: (
    limit: number,
    topicName: { name: string; label: string }
  ) => void
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPrevQuestion: () => void
  goQuestion: (questionIndex: number) => void
  goHome: () => void
}

export const useQuestionStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    currentTopic: '',
    fetchQuestions: async (
      limit: number,
      topic: { name: string; label: string }
    ) => {
      const res = await fetch(`/questions/data-${topic.name}.json`)
      const data = await res.json()
      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions, currentTopic: topic.label })
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get()
      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex(
        (question) => question.id === questionId
      )
      const questionInfo = newQuestions[questionIndex]

      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
      newQuestions[questionIndex] = {
        ...questionInfo,
        userSelectedAnswer: answerIndex,
        isCorrectUserAnswer
      }

      set({ questions: newQuestions })
    },
    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion })
      }
    },
    goPrevQuestion: () => {
      const { currentQuestion } = get()
      const prevQuestion = currentQuestion - 1
      if (prevQuestion >= 0) {
        set({ currentQuestion: prevQuestion })
      }
    },
    goQuestion: (questionIndex: number) => {
      set({ currentQuestion: questionIndex })
    },
    goHome: () => {
      set({ questions: [], currentQuestion: 0, currentTopic: '' })
    }
  }
})
