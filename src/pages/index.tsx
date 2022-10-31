// Imports
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

// Styled components and CSS
import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from '../styles/pages/home'

// Images
import shirt1 from '../assets/camisa1.png'
import shirt2 from '../assets/camisa2.png'
import shirt3 from '../assets/camisa3.png'

// Page: Home
export default function Home() {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
