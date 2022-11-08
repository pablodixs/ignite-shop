// Imports
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../libs/stripe'
import Stripe from 'stripe'

// Styled components and CSS
import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

// Page: Home
export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} alt="" width={520} height={480} quality={100} />
            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price / 100}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  }
}
