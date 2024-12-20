import { Stack, Typography } from '@mui/material'
import Question from './Question'
import useResult from '../hooks/useResult'

const Result = () => {
  const { questions, resultMessage } = useResult()
  return (
    <>
      <Typography variant='subtitle1' component='p'>
        {resultMessage}
      </Typography>
      <Stack direction='column' gap={4}>
        {questions.map((question) => (
          <Question info={question} key={question.id} result={true} />
        ))}
      </Stack>
    </>
  )
}

export default Result
