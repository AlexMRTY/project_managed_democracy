import Image from "next/image";
import { cn } from "@/lib/utils";


export default function UpcommingStratagems(props: { stratagemQueue: string[] | undefined}) {
    return (
        <div className={cn("flex")}>
            {props.stratagemQueue?.map((s, idx) => {
              const size = "65"
              return (
                <fieldset
                  key={idx}
                  className={cn(
                    "w-28 h-28 flex items-center justify-center",
                  )}
                >
                  <Image src={s} width={size} height={size} alt="icon" />
                </fieldset>
              )
            })}
        </div>
    );
}