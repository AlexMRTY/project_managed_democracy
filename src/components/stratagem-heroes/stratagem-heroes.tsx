"use client"

import { Queue } from "@/lib/queue"
import CurrentStratagem from "./current-stratagem";
import UpcommingStratagems from "./upcomming-stratagems";

const stratagems = [
  "./stratagems/EMSmortaricon.svg",
  "./stratagems/APW-1icon.svg",
  "./stratagems/OrbitalPrecisionicon.svg",
  "./stratagems/EagleAirstrikeicon.svg",
  "./stratagems/Missilesentryicon.svg",
  "./stratagems/OrbitalEMSicon.svg",
]

const stratagemsQueue = new Queue<string>();
stratagems.map((item) => {
  stratagemsQueue.enqueue(item);
})

export default function StratagemHeroes() {
  let cur:string | undefined;
  let upcomming:string[] | undefined= [];

  if (!stratagemsQueue.isEmpty()) {
    cur = stratagemsQueue.dequeue();
    upcomming = stratagemsQueue.peekQueue();
  }
  return (
    <section className="flex justify-center">
      <CurrentStratagem stratagem={cur}/>
      <UpcommingStratagems stratagemQueue={upcomming}/>
      
    </section>
  )
}
