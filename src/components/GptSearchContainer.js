import { BG_IMAGE_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GptSearchContainer = () => {
  return (
    <div>
      <div className="absolute">
        <img src={BG_IMAGE_URL} alt="netflix_background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;
