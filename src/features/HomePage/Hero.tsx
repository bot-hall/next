import {FC} from "react";

type Props = {
  text: string
}

const Hero: FC<Props> =({text}) => {
  return (
    <div>
      <p className="text-white text-2xl">{text}</p>
    </div>
  )
}
export default Hero
