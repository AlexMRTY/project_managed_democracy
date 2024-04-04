import StratagemHeroes from "@/components/stratagem-heroes/stratagem-heroes"
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/ui/toggle-theme"

export default function Home() {
  return (
    <div>
      <ModeToggle />

      <StratagemHeroes />
    </div>
  )
}
