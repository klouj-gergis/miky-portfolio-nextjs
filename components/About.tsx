import Link from "next/link";


export default function About() {
  return (
    <section className="w-full h-[80vh] flex flex-col justify-center px-5 gap-5">
      <h2 className="text-4xl">About me</h2>
      <p className="text-xl w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Link href="/about" className="px-5 py-3 bg-accent rounded-lg text-xl w-fit">Let's Work Together</Link>
    </section>
  )
}
