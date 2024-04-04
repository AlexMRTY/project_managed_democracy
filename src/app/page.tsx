import { Button } from "@/components/ui/button"
import Terminal from "@/components/terminal/terminal"
import { cn } from "@/lib/utils"

interface Props {
  directions: String[]
}
export default function Home( {directions}:Props) {
  return (
    
    <div className="">
      <Terminal/>
    </div>

    
  )
}
