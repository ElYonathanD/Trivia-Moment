import { Button, Stack } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Question from './Question'

const Result = () => {
  const questions = useQuestionStore((state) => state.questions)
  const goHome = useQuestionStore((state) => state.goHome)
  let correctQuestions = 0

  questions.forEach((question) => {
    if (question.isCorrectUserAnswer) correctQuestions++
  })

  return (
    <>
      <p>
        Has contestado correctamente {correctQuestions} de {questions.length}
      </p>
      <Button variant='outlined' onClick={goHome} sx={{ marginBottom: '20px' }}>
        Ir a inicio
      </Button>
      <Stack direction='column' gap={4}>
        {questions.map((question) => (
          <Question info={question} key={question.id} result={true} />
        ))}
      </Stack>
    </>
  )
}

export default Result
