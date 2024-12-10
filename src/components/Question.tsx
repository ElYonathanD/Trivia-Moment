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
const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)
  return (
    <Card variant='elevation' sx={{ p: 3, textAlign: 'left' }}>
      <Typography variant='h5'>{info.question}</Typography>
      <SyntaxHighlighter language='javascript' style={nord}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#313131' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem
            key={answer}
            disablePadding
            divider
            sx={index === info.userSelectedAnswer ? { bgcolor: '#aaa' } : {}}
          >
            <ListItemButton onClick={() => selectAnswer(info.id, index)}>
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default Question
