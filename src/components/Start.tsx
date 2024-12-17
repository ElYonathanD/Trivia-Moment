import { Button, Typography } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import Grid from '@mui/material/Grid2'
import './start.css'
const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions)

  return (
    <>
      <Typography variant='subtitle1' component='p'>
        Elije uno de nuestros temas y contesta las preguntas
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent='center'
      >
        <Grid size={6}>
          <Button
            className='button-background js-button '
            fullWidth
            onClick={() => fetchQuestions(5, 'js')}
            variant='contained'
          >
            JavaScript
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            className='button-background cg-button'
            fullWidth
            onClick={() => fetchQuestions(5, 'cg')}
            variant='contained'
          >
            Cultura general
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            className='button-background math-button'
            fullWidth
            onClick={() => fetchQuestions(5, 'mat')}
            variant='contained'
          >
            Matemáticas
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            className='button-background cp-button'
            fullWidth
            onClick={() => fetchQuestions(5, 'cp')}
            variant='contained'
          >
            Capitales
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Start
