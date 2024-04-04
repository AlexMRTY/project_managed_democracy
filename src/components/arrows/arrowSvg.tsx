import { SVGProps } from "react"

interface Props {
    fill: string,
    deg: string
}

const ArrowSVG = (props: SVGProps<SVGSVGElement> & Props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    color="#ff0"
    height="50"
    width="50"
    transform={`rotate(${props.deg})`}
    viewBox="0 0 100 100"
  >
    <path
      fill={props.fill}
      d="m50.868 83.108 36.418-31.147a2.516 2.516 0 0 0 1.051-2.043v-.006a2.52 2.52 0 0 0-1.059-2.048L50.86 17.097a2.513 2.513 0 0 0-2.612-.183 2.509 2.509 0 0 0-1.361 2.236v17.063l-32.709-.001a2.514 2.514 0 0 0-2.515 2.516l.001 22.541a2.515 2.515 0 0 0 2.516 2.516h32.706v17.28c0 .94.53 1.802 1.366 2.236a2.51 2.51 0 0 0 2.616-.193z"
    />
  </svg>
)
export default ArrowSVG
