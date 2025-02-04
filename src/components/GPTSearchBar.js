import { useSelector } from "react-redux";
import lang from "../utils/langConstants";
const GPTSearchBar = () => {
  const selectedLanguage = useSelector(
    (store) => store.config.selectedLanguage
  );
  return (
    <div className="pt-[10%]">
      <form className="grid grid-cols-12 bg-black p-1 w-1/2 mx-auto">
        <input
          type="text"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-sm"
        />
        <button className=" bg-red-600 text-white font-medium px-4 py-2 my-4 mr-4 col-span-3 text-md rounded-md">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
