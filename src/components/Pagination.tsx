import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Pagination = ({ children }: Props) => {
  const {
    questions,
    currentQuestion,
    goNextQuestion,
    goPrevQuestion,
    goQuestion,
    finish
  } = useQuestionStore((state) => state)
  const missingAnswer = questions.some(
    (question) => question.userSelectedAnswer == undefined
  )

  return (
    <Stack
      direction='column'
      gap={4}
      alignItems='center'
      justifyContent='center'
    >
      <Stack
        direction='row'
        gap={4}
        alignItems='center'
        justifyContent='center'
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
      {children}
      <Stack direction='column'>
        <Button
          variant='outlined'
          className='finish-button'
          onClick={() => finish()}
          disabled={missingAnswer}
        >
          Finalizar
        </Button>
        <Stack
          direction='row'
          justifyContent='center'
          gap={2}
          flexWrap='wrap'
          sx={{ marginTop: '20px' }}
        >
          {questions.map((question, index) => (
            <Button
              key={question.id}
              className={`questions-number-button ${
                question.userSelectedAnswer !== undefined ? 'answered' : ''
              }`}
              variant='outlined'
              onClick={() => goQuestion(index)}
            >
              {index + 1}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Pagination
