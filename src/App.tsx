import { Container, Stack } from '@mui/material'
import './App.css'
import Start from './components/Start'
import { useQuestionStore } from './store/questions'
import Game from './components/Game'

function App() {
  const questions = useQuestionStore((state) => state.questions)
  return (
    <main>
      <Stack
        direction='column'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
        <Container>
          <h1>Quiz App</h1>
        </Container>
        {questions.length === 0 ? <Start /> : <Game />}
      </Stack>
    </main>
  )
}

export default App
