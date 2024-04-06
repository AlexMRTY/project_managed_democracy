import StratagemHeroes from "@/components/stratagem-heroes/stratagem-heroes"
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/ui/toggle-theme"
import Terminal from "@/components/terminal/terminal"
import { cn } from "@/lib/utils"

interface Props {
  directions: String[]
}
export default function Home( {directions}:Props) {
  return (
    <div>
      
      <Terminal/>
    </div>

    
  )
}
