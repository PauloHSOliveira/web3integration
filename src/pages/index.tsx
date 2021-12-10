import type { NextPage } from 'next'
import {useMemo} from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Button, Typography} from '@material-ui/core'
import {useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from "@ethersproject/units";

const Home: NextPage = () => {
  const {account,activateBrowserWallet,deactivate,} = useEthers()
  const etherBalance = useEtherBalance(account)

  const ethBalance = useMemo(() => {
    return `ETH Balance: ${etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3) + 'ETH' || 'Wallet dont connected'}`
  }, [etherBalance])


  const handleWallet= () => {
    activateBrowserWallet()
  }

  const handleDisable = () => {
    deactivate()
  }

  return (
    <Layout>
     <Box margin={'0 auto'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
     <Box color="#fff">
          <Typography>
           Wallet: {account || 'Connect Wallet'}
          </Typography>
       </Box>
       <Box color="#fff">
          <Typography>
            {ethBalance}
          </Typography>
       </Box>
     {account ? (
        <Button variant='outlined' color="primary" onClick={handleDisable}>
        Disconnect Wallet
      </Button>
     ): <Button variant='outlined' color="primary" onClick={handleWallet}>
      Connect Wallet
      </Button>}
     </Box>
    </Layout>
  )
}

export default Home
