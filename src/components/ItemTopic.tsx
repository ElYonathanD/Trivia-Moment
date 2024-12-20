import { Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useQuestionStore } from '../store/questions'

interface Props {
  topic: {
    name: string
    label: string
  }
}
const ItemTopic = ({ topic }: Props) => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)

  return (
    <Grid size={6} key={topic.name}>
      <Button
        className={`button-background ${topic.name}-button`}
        fullWidth
        onClick={() => fetchQuestions(15, topic)}
        variant='contained'
      >
        {topic.label}
      </Button>
    </Grid>
  )
}

export default ItemTopic
