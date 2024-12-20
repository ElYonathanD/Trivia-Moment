import { Stack } from '@mui/material'
import './App.css'
import Start from './components/Start'
import { useQuestionStore } from './store/questions'
import Game from './components/Game'

function App() {
  const questions = useQuestionStore((state) => state.questions)
  const currentTopic = useQuestionStore((state) => state.currentTopic)
  return (
    <main>
      <Stack
        direction='column'
        gap={1}
        alignItems='center'
        justifyContent='center'
      >
        <h1>Trivia Moment</h1>
        {currentTopic && <h2 style={{ margin: '0' }}>{currentTopic}</h2>}
        {questions.length === 0 ? <Start /> : <Game />}
      </Stack>
    </main>
  )
}

export default App
