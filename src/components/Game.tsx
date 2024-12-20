import '../styles/game.css'
import { Button, Container } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Question from './Question'
import Result from './Result'
import Pagination from './Pagination'

const Game = () => {
  const { questions, goHome, currentQuestion, isFinish } = useQuestionStore(
    (state) => state
  )
  const questionInfo = questions[currentQuestion]

  return (
    <Container maxWidth='lg' sx={{ padding: 0 }}>
      <Button variant='outlined' onClick={goHome} className='home-button'>
        Ir a inicio
      </Button>

      {!isFinish ? (
        <Pagination>
          <Question info={questionInfo} />
        </Pagination>
      ) : (
        <Result />
      )}
    </Container>
  )
}

export default Game
