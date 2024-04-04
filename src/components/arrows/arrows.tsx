"use client"
import Image from "next/image"
import ArrowSVG from "./arrowSvg"
import { useEffect } from "react"

const directionArray = [
    "left",
    "right",
    "down",
    "up",
]


export default function Arrows() {

    useEffect(() => {
        document.addEventListener(`keydown`, (e) => {
            console.log(e.key);
        }, true)
    }, [])
    
    return (
        <div className="flex justify-center border border-solid border-red-400 w-96 mx-auto">
            {directionArray.map((d, i) => {
                switch (d) {
                    case "right":
                        return <ArrowSVG deg="0" fill="#fff" key={i}/>
                    case "down":
                        return <ArrowSVG deg="90" fill="#fff" key={i}/>
                    case "left":
                        return <ArrowSVG deg="180" fill="#fff" key={i}/>
                    case "up":
                        return <ArrowSVG deg="270" fill="#fff" key={i}/>
                    default:
                        return null;
                }
            })}
        </div>
    )
}