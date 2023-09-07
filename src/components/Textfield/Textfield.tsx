import CopyIcon from '../../assets/images/icon-copy.svg'

type TextfieldProps = {
    password: string
}

const Textfield: React.FC<TextfieldProps> = ({password}) => {
    return (
        <div className='bg-dark-grey w-1/3 h-16 px-6 py-4 flex justify-between items-center text-headingM text-almost-white'>
            {password}
            <img src={CopyIcon} alt="copy icon" className='w-5 h-5'/>
        </div>
    )
}

export default Textfield