import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Modal from "~/components/Modal";
import { RouteAppObject } from "~/interfaces/routes.intf";
import { Theme } from "~/interfaces/theme.intf";
import Header from "~/layout/Header";
import SocialSideBar from "~/layout/SocialSideBar";
import { getRouteByName, getRouteByPath, RouteList } from "~/routes/routes.app";
import Screen from "~/sass/abstract/variables.module.scss";

import PageLoader from "./components/PageLoader";
import { CacheImages } from "./datas/cache.img.data";
import useWindowSize from "./hooks/useWindowsSize";
import Contact from "./pages/Contact";

const App: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [menuIsLigth, setMenuIsLigth] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.ligth);
  const [currentSocialTheme, setCurrentSocialTheme] = useState<Theme>(Theme.ligth);
  const [headerTitle, setHeaderTitle] = useState<string>();
  const [currentRoute, setCurrentRoute] = useState<RouteAppObject>();
  const [appCacheLoaded, setAppCacheLoaded] = useState<boolean>(false);
  const [appLoaderVisible, setAppLoaderVisible] = useState<boolean>(false);
  const location = useLocation();
  const windowsSize = useWindowSize();

  const state = location.state as { backgroundLocation?: Location };
  const contactRoute = getRouteByName("contact");

  useEffect(() => {
    setAppLoaderVisible(true);
    cacheImages(CacheImages);
  }, []);

  useEffect(() => {
    const route = getRouteByPath(location.pathname);
    route ? setCurrentRoute(route) : setCurrentRoute(getRouteByName("error"));
    if (!state) setMenuIsLigth(route?.params?.menuIconLigth ?? false);
    if (!state) setCurrentTheme(route?.params?.theme ?? Theme.ligth);
    if (!state)
      setCurrentSocialTheme(route?.params?.socialTheme ?? route?.params?.theme ?? Theme.ligth);
    if (!state) setHeaderTitle(route?.headerTitle);
  }, [location, state]);

  console.log(process.env.REACT_APP_CAPTCHA_SITE_KEY);

  // Specific theme layout change for responsive design
  useEffect(() => {
    if (location.pathname === getRouteByName("home")?.path) {
      windowsSize.width < parseInt(Screen.screenLg) ? setMenuIsLigth(false) : setMenuIsLigth(true);
    }
    if (location.pathname === getRouteByName("contact")?.path) {
      windowsSize.width < parseInt(Screen.screenLg)
        ? setCurrentSocialTheme(Theme.ligth)
        : setCurrentSocialTheme(Theme.dark);
    }
  }, [windowsSize, location]);

  const handleClickMenu = (value: boolean) => {
    setMenuIsOpen(value);
  };

  const cacheImages = async (srcArray: string[]) => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    await Promise.all(promises);

    // Hide loader app
    setAppLoaderVisible(false);

    // Display content
    const timer = setTimeout(() => {
      setAppCacheLoaded(true);
      clearTimeout(timer);
    }, 700);
  };

  return (
    <div
      data-testid="app"
      className={`react-app${currentTheme === Theme.dark || menuIsOpen ? " dark" : ""}`}
    >
      {appCacheLoaded && (
        <Header
          onClick={handleClickMenu}
          menuIsOpen={menuIsOpen}
          menuIsLigth={menuIsLigth}
          headerTitle={headerTitle}
          theme={currentTheme}
          headerButtonsEnabled={currentRoute?.params?.headerButtonsEnabled}
        />
      )}
      {appCacheLoaded ? (
        <Fragment>
          <main
            className={`${menuIsOpen ? "scale" : ""}${
              currentTheme === Theme.dark ? " theme-dark" : " theme-ligth"
            }`}
          >
            {RouteList.length > 0 && (
              <Routes location={state?.backgroundLocation || location}>
                {RouteList.map(({ path, Component, title }) => (
                  <Route key={path} path={path} element={<Component title={title} />} />
                ))}
              </Routes>
            )}
            {state?.backgroundLocation && (
              <Routes>
                {contactRoute != null && (
                  <Route
                    path={contactRoute?.path}
                    element={
                      <Modal
                        title={contactRoute?.headerTitle}
                        heigth="70%"
                        width="100%"
                        dismissNavigator
                      >
                        <Contact title={contactRoute?.headerTitle} isModal />
                      </Modal>
                    }
                  />
                )}
              </Routes>
            )}
          </main>
          <SocialSideBar menuIsOpen={menuIsOpen} ligthen={currentSocialTheme === Theme.dark} />
        </Fragment>
      ) : (
        <div data-testid="loading">
          <PageLoader visible={appLoaderVisible} />
        </div>
      )}
    </div>
  );
};

export default App;
