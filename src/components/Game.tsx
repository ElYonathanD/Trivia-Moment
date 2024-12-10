import { Button, Stack } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Question from './Question'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const goPrevQuestion = useQuestionStore((state) => state.goPrevQuestion)
  const infoQuestion = questions[currentQuestion]
  return (
    <>
      <Stack
        direction='row'
        gap={4}
        alignItems='center'
        justifyContent='center'
        sx={{ marginBottom: '20px' }}
      >
        <Button
          variant='outlined'
          onClick={goPrevQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNew />
        </Button>
        {currentQuestion + 1} / {questions.length}
        <Button
          variant='outlined'
          onClick={goNextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          <ArrowForwardIos />
        </Button>
      </Stack>
      <Question info={infoQuestion} />
    </>
  )
}

export default Game
