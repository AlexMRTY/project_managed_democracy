"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

const stratagemsQueue = [
  "./stratagems/EMSmortaricon.svg",
  "./stratagems/EMSmortaricon.svg",
  "./stratagems/EMSmortaricon.svg",
  "./stratagems/EMSmortaricon.svg",
  "./stratagems/EMSmortaricon.svg",
  "./stratagems/EMSmortaricon.svg",
]

export default function StratagemHeroes() {
  return (
    <section className="flex">
      {stratagemsQueue.map((s, idx) => {
        const size = idx == 0 ? "90" : "65"
        return (
          <fieldset
            key={idx}
            className={cn(
              "w-28 h-28 flex items-center justify-center",
              idx == 0 && "border-[3px] border-yellow-400 border-solid"
            )}
          >
            <Image src={s} width={size} height={size} alt="icon" />
          </fieldset>
        )
      })}
    </section>
  )
}
