
type AppButtonProps = {
    title: string
}


const AppButton:React.FC<AppButtonProps> = ({title}) => {
    return (

        <div className='w-4/5 h-16 flex justify-center items-center gap-4 bg-neon-green outline outline-2 -outline-offset-1 hover:bg-opacity-0 outline-neon-green text-very-dark-grey hover:text-neon-green'>
            <button className="flex justify-center items-center gap-4">
                <span>{title}</span>
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
            </button>
        </div>
    )
}

export default AppButton