import { Button, Container, Stack } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Question from './Question'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useState } from 'react'
import Result from './Result'

const Game = () => {
  const [isFinish, setIsFinish] = useState(false)

  const questions = useQuestionStore((state) => state.questions)
  const goHome = useQuestionStore((state) => state.goHome)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const goQuestion = useQuestionStore((state) => state.goQuestion)
  const goPrevQuestion = useQuestionStore((state) => state.goPrevQuestion)
  const infoQuestion = questions[currentQuestion]
  const missingAnswer = questions.some(
    (question) => question.userSelectedAnswer == undefined
  )
  return (
    <Container maxWidth='md' sx={{ padding: 0 }}>
      <Button
        variant='outlined'
        onClick={goHome}
        sx={{
          marginBottom: '20px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        Ir a inicio
      </Button>

      {!isFinish ? (
        <>
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
          <Question info={infoQuestion} />
          <Stack direction='column'>
            <Button
              variant='outlined'
              sx={{ marginTop: '20px', float: 'right' }}
              onClick={() => setIsFinish(!isFinish)}
              disabled={missingAnswer}
            >
              Finalizar
            </Button>
            <Stack
              direction='row'
              justifyContent='center'
              gap={2}
              sx={{ marginTop: '20px', flexWrap: 'wrap' }}
            >
              {questions.map((question, index) => (
                <Button
                  key={question.id}
                  sx={{
                    borderBottom:
                      question.userSelectedAnswer !== undefined
                        ? '1px solid white'
                        : '',
                    backgroundColor:
                      question.userSelectedAnswer !== undefined
                        ? '#173e75'
                        : 'transparent',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  variant='outlined'
                  onClick={() => goQuestion(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </Stack>
          </Stack>
        </>
      ) : (
        <Result />
      )}
    </Container>
  )
}

export default Game
