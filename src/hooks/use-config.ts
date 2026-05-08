import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleDarkMode } from "@/store/slices/configSlice";

const useConfig = () => {
  const dispatch = useAppDispatch();

  let state = useAppSelector((state) => state.config);

  const darkMode = state.darkMode;
  const background = state.background;

  const setDayNight = () => {
    dispatch(toggleDarkMode());
  };

  return { darkMode, background, setDayNight };
};

export default useConfig;
