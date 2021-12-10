import {Box} from '@material-ui/core'

// import { Container } from './styles';

const Layout: React.FC = ({children}) => {
  return (
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        height="100vh"
        flex={1}
        bgcolor={"#000"}
      >
        {children}
      </Box>
  )
}

export default Layout;