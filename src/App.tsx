import Options from "./components/Options/Options";
import Textfield from "./components/Textfield/Textfield";
import Text from "./components/Text/Text";
import Strength from "./components/Strength/Strength";
import AppButton from "./components/Button/AppButton";
import ArrowIcon from "./components/icons/ArrowIcon";
import { usePassword } from "./components/Contexts/PasswordContext";

const App = () => {
  const { password, generatePassword } = usePassword();

  return (
    <div className="w-screen flex h-screen place-items-center flex-col">
      <div className="w-11/12 md:w-5/6 lg:w-1/3 h-screen flex flex-col items-center gap-4 pt-12 md:gap-6 md:pt-16">
        <>
          <h1 className="hidden text-grey md:block">
            <Text variant="headingM">Password Generator</Text>
          </h1>
          <h1 className="text-grey md:hidden">
            <Text variant="body" className="text-[16px]">
              Password Generator
            </Text>
          </h1>
        </>
        <Textfield password={password} placeholder="P4$5W0rD!" />
        <div className="bg-dark-grey gap-8 flex flex-col px-4 md:px-8 w-full py-8">
          <Options />
          <Strength />
          <AppButton
            icon={<ArrowIcon />}
            handlePress={generatePassword}
            className="w-full flex flex-row items-center justify-center gap-4 h-16 bg-neon-green text-dark-grey hover:bg-transparent hover:border hover:border-neon-green hover:text-neon-green"
          >
            <Text variant="body">GENERATE</Text>
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default App;
