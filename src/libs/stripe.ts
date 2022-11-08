import Stripe from 'stripe'

// const secretKey = process.env.STRIPE_SECRET_secretKEY as string
const secretKey = 'sk_test_51Lz4zrBjWNo54ToP6fEt2FuUDG9dAMOcocWQIhYUglEDxJc2C8z13ECI6eqBeOJfMDCl94Y6ADnuyEJokwi5Wq2m00njRXBqzx'

export const stripe = new Stripe(secretKey, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'Ignite Shop'
  }
})