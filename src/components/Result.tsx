import { Stack, Typography } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import JSConfetti from 'js-confetti'
import Question from './Question'

const Result = () => {
  const questions = useQuestionStore((state) => state.questions)
  let correctQuestions = 0

  questions.forEach((question) => {
    if (question.isCorrectUserAnswer) correctQuestions++
  })
  const getMessageResult = () => {
    if (correctQuestions > 0 && correctQuestions <= 6)
      return `Acertaste ${correctQuestions} de ${questions.length} preguntas. Ops... No te ha ido muy bien, inténtalo de nuevo.`
    if (correctQuestions > 6 && correctQuestions <= 10)
      return `Acertaste ${correctQuestions} de ${questions.length} preguntas. Lo hiciste bien, pero lo puedes hacer mejor.`
    if (correctQuestions > 10 && correctQuestions <= 14)
      return `Acertaste ${correctQuestions} de ${questions.length} preguntas. Muy bien, estuviste demasiado cerca.`

    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    return `Acertaste ${correctQuestions} de ${questions.length} preguntas. Felicitaciones, lo has hecho de maravilla.`
  }
  return (
    <>
      <Typography variant='subtitle1' component='p'>
        {getMessageResult()}
      </Typography>
      <Stack direction='column' gap={4}>
        {questions.map((question) => (
          <Question info={question} key={question.id} result={true} />
        ))}
      </Stack>
    </>
  )
}

export default Result
