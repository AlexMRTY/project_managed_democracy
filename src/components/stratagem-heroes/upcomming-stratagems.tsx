import Image from "next/image";
import { cn } from "@/lib/utils";


export default function UpcommingStratagems(props: { stratagemQueue: string[] | undefined}) {
    return (
        <div className={cn("flex items-center")}>
            {props.stratagemQueue?.map((s, idx) => {
              const size = "65"
              return (
                <fieldset
                  key={idx}
                  className={cn(
                    "w-20 h-20 flex items-center justify-center",
                  )}
                >
                  <Image src={s} width={size} height={size} alt="icon" />
                </fieldset>
              )
            })}
        </div>
    );
}