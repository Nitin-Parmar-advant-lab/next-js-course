import Image from "next/image";
import classes from "./hero.module.css"

export default function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
    <Image src="/images/site/me.png" alt="An image" width={300} height={300} />

    </div>
    <h1 >
      Hi, It's ME, 
    </h1>
    <p>i am learning next js page router, and i am makeing blog project </p>
  </section>
} 