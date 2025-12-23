import Counter from "./Counter";

export default function StatsBar() {
  return (
    <section className="w-full border rounded-2xl pt-5 flex justify-around ">
      <Counter start={0} end={150} duration={1000} title="Projects" />
      <Counter start={0} end={100} duration={1000} title="Clients" />
      <Counter start={0} end={5} duration={1000} title="Years" />
      
    </section>
  )
}
