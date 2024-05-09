import {
  createContext,
  PropsWithChildren, useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type IdProviderFn = (id: string) => void;

type NoopFn = () => void;

type MenuContextValue = {
    openMenu: IdProviderFn;
    closeMenu: IdProviderFn;
    toggleMenu: IdProviderFn;
    closeAllMenus: NoopFn;
    fileMenus: Record<string, boolean>;
}

const MenuContext = createContext<MenuContextValue>({
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {},
  closeAllMenus: () => {},
  fileMenus: {},
});

type MenuProviderProps = PropsWithChildren;

export function MenuProvider({ children }: MenuProviderProps) {
  const [fileMenus, setFileMenus] = useState<Record<string, boolean>>({});

  const closeAllMenus = useCallback(() => {
    setFileMenus(() => ({}));
  }, []);

  const value = useMemo(() => {
    return {
      openMenu(id: string) {
        closeAllMenus();
        setFileMenus(prev => ({...prev, [id]: true}));
      },
      closeMenu(id: string) {
        setFileMenus(prev => ({...prev, [id]: false}));
      },
      toggleMenu(id: string) {
        closeAllMenus();
        setFileMenus(prev => ({...prev, [id]: !prev[id]}));
      },
      closeAllMenus,
      fileMenus
    };
  }, [closeAllMenus, fileMenus]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMenu() {
  return useContext(MenuContext);
}
