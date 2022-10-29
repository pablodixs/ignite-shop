import type { AppProps } from 'next/app'
import Image from 'next/image'

import { GlobalStyle } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImage from './../assets/logo.svg'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt='' />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
