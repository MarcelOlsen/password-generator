import LengthContextProvider from "../Contexts/Contexts"
import Length from "./Length"
import Include from "./Include"

const Options = () => {
    return (
        <div className="bg-dark-grey w-1/3 h-auto py-4 px-6 flex flex-col gap-6">
            <LengthContextProvider>
                <Length/>
            </LengthContextProvider>
            <Include/>
        </div>
    )
}

export default Options