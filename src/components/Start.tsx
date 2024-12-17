import { Button, Container, Typography } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Grid from '@mui/material/Grid2'
import './start.css'
const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)
  const topics = [
    {
      name: 'js',
      label: 'JavaScript'
    },
    {
      name: 'gc',
      label: 'Cultura general'
    },
    {
      name: 'math',
      label: 'Matemáticas'
    },
    {
      name: 'cap',
      label: 'Capitales'
    }
  ]
  return (
    <Container maxWidth='lg'>
      <Typography variant='subtitle1' component='p'>
        Elije uno de nuestros temas y contesta las preguntas
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent='center'
        sx={{ marginTop: '20px' }}
      >
        {topics.map((topic) => (
          <Grid size={6} key={topic.name}>
            <Button
              className={`button-background ${topic.name}-button`}
              fullWidth
              onClick={() => fetchQuestions(15, topic.name)}
              variant='contained'
            >
              {topic.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Start
