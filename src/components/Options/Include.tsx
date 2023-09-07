import AppCheckbox from "../Checkbox/AppCheckbox"

const Include = () => {
    return (
        <div className="flex flex-col gap-4">
            <AppCheckbox title="Include Uppercase Letters "/>
            <AppCheckbox title="Include Lowercase Letters "/>
            <AppCheckbox title="Include Numbers"/>
            <AppCheckbox title="Include Symbols"/>
        </div>
    )
}

export default Include