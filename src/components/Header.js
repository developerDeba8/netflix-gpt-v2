import { useSelector } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toogleGptSearchView } from "../utils/gptSlice";
import { changeSelectedLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsuscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeSelectedLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between z-10">
      <img src={LOGO_URL} alt="Netflx Logo" className="w-44" />
      {user && (
        <div className="flex m-4">
          {showGPTSearch && (
            <select
              className="text-white bg-black px-6 py-2 mx-2 font-medium rounded-md opacity-70 border"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.language}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-gradient-to-r from-black border rounded-md px-6 py-2 mx-2 font-medium"
            onClick={handleGPTSearchClick}
            cursor="pointer"
          >
            GPT Search
          </button>
          <img src={user?.photoURL} alt="user-logo" className="w-12 h-12" />
          <button
            onClick={handleSignOut}
            className="text-white font-bold cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
