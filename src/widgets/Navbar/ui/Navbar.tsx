import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

import BasketIcon from 'shared/assets/icons/basket.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import SearchIcon from 'shared/assets/icons/search.svg';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLink}>
                    Магазин
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLink}>
                    Категории
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLink}>
                    Избранные
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLastLink}>
                    О нас
                </AppLink>
            </div>
            <SearchIcon/>
            <BasketIcon/>
            <ProfileIcon/>
        </div>
    );
};