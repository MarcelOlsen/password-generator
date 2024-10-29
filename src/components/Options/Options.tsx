import Length from "./Length";
import Include from "./Include";

const Options = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-6">
      <Length />
      <Include />
    </div>
  );
};

export default Options;
