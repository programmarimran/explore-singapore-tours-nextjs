export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/singapore-tours.json`)
  const projects = await res.json()
 
  return { props: { projects } }
}
