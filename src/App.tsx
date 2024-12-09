import { Container, Stack } from '@mui/material'
import './App.css'
import JsIcon from './components/JsIcon'
import Start from './components/Start'
import { useQuestionStore } from './store/questions'
import Game from './components/Game'

function App() {
  const questions = useQuestionStore((state) => state.questions)
  console.log(questions)
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          gap={4}
          alignItems='center'
          justifyContent='center'
        >
          <h1>JS Quiz</h1>
          <JsIcon />
        </Stack>
        {questions.length === 0 ? <Start /> : <Game />}
      </Container>
    </main>
  )
}

export default App
