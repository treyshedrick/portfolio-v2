
import { SCREEN_SIZE } from "./constants";
import { useMediaQuery } from 'react-responsive';
import mobile from "is-mobile";

export const useIsSmallScreen = () => {
    const isSmallScreen = useMediaQuery({ query: SCREEN_SIZE.SMALL });
    const isMobile = mobile();

    return isMobile || isSmallScreen;
};