import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import * as cls from "./ThemeSwitcher.module.scss";
import DarkIcon from "shared/assets/icons/moon.svg"
import LightIcon from "shared/assets/icons/sun.svg"

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className} : ThemeSwitcherProps) => {
 const {theme, toggleTheme} = useTheme();

 return (
    <Button
    theme={ThemeButton.CLEAR}
    className={classNames(cls.ThemeSwitcher, {}, [className])}
    onClick={toggleTheme}>
    {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
 )
}