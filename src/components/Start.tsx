import { Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import '../styles/start.css'
import ItemTopic from './ItemTopic'
const Start = () => {
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
      <Stack justifyContent='center' alignItems='center' gap={2}>
        <Typography variant='subtitle1' component='p'>
          ¿Quieres poner a prueba tu conocimiento? ¡Elije y completa una de
          nuestras secciones para descubrir que tan inteligente eres!
        </Typography>
        <SentimentSatisfiedAltIcon />
      </Stack>
      <Grid
        container
        rowSpacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent='center'
        sx={{ marginTop: '20px' }}
      >
        {topics.map((topic) => (
          <ItemTopic key={topic.name} topic={topic} />
        ))}
      </Grid>
    </Container>
  )
}

export default Start
