import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'

const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)

  return (
    <Button onClick={() => fetchQuestions(5)} variant='contained'>
      Comenzar
    </Button>
  )
}

export default Start
