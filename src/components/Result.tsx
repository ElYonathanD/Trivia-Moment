import { Stack, Typography } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Question from './Question'

const Result = () => {
  const questions = useQuestionStore((state) => state.questions)
  let correctQuestions = 0

  questions.forEach((question) => {
    if (question.isCorrectUserAnswer) correctQuestions++
  })

  return (
    <>
      <Typography variant='subtitle1' component='p'>
        Has contestado correctamente {correctQuestions} de {questions.length}
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
