import MainNavigation from "./main-nav";

export default function Layout(props) {
  return <>
  <MainNavigation/>
  <main>{props.children}</main>
  </>
}