import { useMemo } from 'react'
import { useQuestionStore } from '../store/questions'
import JSConfetti from 'js-confetti'

const useResult = () => {
  const questions = useQuestionStore((state) => state.questions)

  const correctQuestions = useMemo(() => {
    return questions.filter((question) => question.isCorrectUserAnswer).length
  }, [questions])

  const resultMessage = useMemo(() => {
    const totalQuestions = questions.length
    const percentage = (correctQuestions / totalQuestions) * 100

    if (percentage === 100) {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
      return `Acertaste ${correctQuestions} de ${totalQuestions} preguntas. Felicitaciones, lo has hecho de maravilla.`
    } else if (percentage >= 70) {
      return `Acertaste ${correctQuestions} de ${totalQuestions} preguntas. Muy bien, estuviste demasiado cerca.`
    } else if (percentage >= 50) {
      return `Acertaste ${correctQuestions} de ${totalQuestions} preguntas. Lo hiciste bien, pero lo puedes hacer mejor.`
    } else {
      return `Acertaste ${correctQuestions} de ${totalQuestions} preguntas. Ops... No te ha ido muy bien, inténtalo de nuevo.`
    }
  }, [correctQuestions, questions.length])
  return { questions, resultMessage }
}

export default useResult
