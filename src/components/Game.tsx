import { useQuestionStore } from '../store/questions'
import Question from './Question'

const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)

  const infoQuestion = questions[currentQuestion]
  return <Question info={infoQuestion} />
}

export default Game
