import Link from "next/link";
import Logo from "./logo";
import classes from "./main-nav.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
          <Logo />
      </Link>
      <mav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/context">Context</Link>
          </li>
        </ul>
      </mav>
    </header>
  );
}
