import * as Checkbox from '@radix-ui/react-checkbox';

import Checkmark from  '../../assets/images/icon-check.svg';

interface AppCheckboxProps {
    defaultChecked?: boolean
    title: string
}

const AppCheckbox: React.FC<AppCheckboxProps> = ({defaultChecked, title}) => {
    return (
        <div className="flex items-center">
      <Checkbox.Root
        className="flex h-4 w-4 items-center justify-center bg-very-dark-grey outline outline-2 -outline-offset-2 outline-almost-white"
       defaultChecked={defaultChecked}
        id="c1"
      >
        <Checkbox.Indicator className="w-full h-full bg-neon-green flex justify-center items-center outline-none z-50">
            <img src={Checkmark} className='text-very-dark-grey h-2.5 w-2.5'/>
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-5 text-[12px] leading-none text-almost-white font-normal" htmlFor="c1">
        {title}
      </label>
    </div>
    )
}

export default AppCheckbox