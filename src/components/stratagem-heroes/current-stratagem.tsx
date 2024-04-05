import { cn } from "@/lib/utils"
import Image from "next/image"

export default function CurrentStratagem(props: { stratagem: string | undefined}) {
    return (
        <div>
            <fieldset
                className={cn(
                    "w-28 h-28 flex items-center justify-center",
                    "border-[3px] border-yellow-400 border-solid"
                )}
                >
                    <Image src={props.stratagem} width="90" height="90" alt="icon" />
            </fieldset>
        </div>
    );
}