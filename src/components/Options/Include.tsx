import AppCheckbox from "../Checkbox/AppCheckbox";
import { useOptions } from "../Contexts/OptionsContext";

const Include = () => {
  const {
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols,
    setIncludeLowerCase,
    setIncludeUpperCase,
    setIncludeNumbers,
    setIncludeSymbols,
  } = useOptions();
  return (
    <div className="flex flex-col gap-4">
      <AppCheckbox
        title="Include Uppercase Letters "
        handleUpdate={setIncludeUpperCase}
        defaultChecked={includeUpperCase}
      />
      <AppCheckbox
        title="Include Lowercase Letters "
        handleUpdate={setIncludeLowerCase}
        defaultChecked={includeLowerCase}
      />
      <AppCheckbox
        title="Include Numbers"
        handleUpdate={setIncludeNumbers}
        defaultChecked={includeNumbers}
      />
      <AppCheckbox
        title="Include Symbols"
        handleUpdate={setIncludeSymbols}
        defaultChecked={includeSymbols}
      />
    </div>
  );
};

export default Include;
