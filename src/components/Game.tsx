import '../styles/game.css'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Button, Container, Stack } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import { useState } from 'react'
import Question from './Question'
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
    <Container maxWidth='lg' sx={{ padding: 0 }}>
      <Button variant='outlined' onClick={goHome} className='home-button'>
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
              className='finish-button'
              onClick={() => setIsFinish(!isFinish)}
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
        </>
      ) : (
        <Result />
      )}
    </Container>
  )
}

export default Game
