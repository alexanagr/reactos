// hooks
import { useAppDispatch, useAppSelector } from "@/store/hooks";
// actions
import { toggleMenu, openMenu, closeMenu } from "@/store/slices/menuSlice";

export const useMenu = (id: string) => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(
    (state) => state.menu.items[id]?.shown ?? false,
  );

  const toggle = () => {
    dispatch(toggleMenu(id));
  };

  const open = () => {
    dispatch(openMenu(id));
  };

  const close = () => {
    dispatch(closeMenu(id));
  };

  return {
    isOpen,
    toggle,
    open,
    close,
  };
};
