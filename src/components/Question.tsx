import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import { Question as QuestionType } from '../interface/question'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useQuestionStore } from '../store/questions'
const getBgColor = (info: QuestionType, index: number) => {
  if (info.correctAnswer == index) return '#106b10'
  if (info.userSelectedAnswer == index && !info.isCorrectUserAnswer)
    return '#930d0d'
  return 'transparent'
}
const Question = ({
  info,
  result
}: {
  info: QuestionType
  result?: boolean
}) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  return (
    <Card variant='elevation' sx={{ p: 3, textAlign: 'left' }}>
      <Typography variant='h5'>{info.question}</Typography>
      {info.code && (
        <SyntaxHighlighter language='javascript' style={nord}>
          {info.code}
        </SyntaxHighlighter>
      )}

      <List sx={{ bgcolor: '#313131', marginTop: '20px' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem
            key={answer}
            disablePadding
            divider
            sx={
              result
                ? { bgcolor: getBgColor(info, index) }
                : index === info.userSelectedAnswer
                ? { bgcolor: '#2667c1' }
                : {}
            }
          >
            <ListItemButton
              sx={result ? { pointerEvents: 'none' } : {}}
              onClick={() => selectAnswer(info.id, index)}
            >
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default Question
