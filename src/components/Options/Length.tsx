import { useContext } from "react";
import { LengthContext } from "../Contexts/Contexts";
import AppSlider from "../Slider/AppSlider"

const Length = () => {
    const length = useContext(LengthContext);

    return (
        <div className="flex flex-col text-almost-white">
            <div className="flex justify-between items-center">
                <span className="text-[12px] font-light">Character Length</span>
                <span className="text-body text-neon-green">{length?.length}</span>
            </div>
            <AppSlider defaultValue={32} max={256} step={1}/>
        </div>
    )
}

export default Length