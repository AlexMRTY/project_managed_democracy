"use client"
import Arrows from "../arrows/arrows";
import StratagemHeroes from "../stratagem-heroes/stratagem-heroes";

export default function Terminal() {
    return (
        <div className=" border-solid border-red border-2">
            <StratagemHeroes/>
            <Arrows/>
        </div>
    )
}