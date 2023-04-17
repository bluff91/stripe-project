import { useAppContext } from '../context/context'
import phoneImg from '../images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useAppContext()
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="" />
        </article>
      </div>
    </section>
  )
}
export default Hero
