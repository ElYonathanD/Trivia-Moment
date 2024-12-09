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
const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card variant='elevation' sx={{ p: 3, textAlign: 'left' }}>
      <Typography variant='h5'>{info.question}</Typography>
      <SyntaxHighlighter language='javascript' style={nord}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ bgcolor: '#313131' }} disablePadding>
        {info.answers.map((answer) => (
          <ListItem key={answer} disablePadding divider>
            <ListItemButton>
              <ListItemText primary={answer} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default Question
