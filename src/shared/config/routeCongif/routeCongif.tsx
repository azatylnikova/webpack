import { AboutPage } from "pages/AboutPage"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath :  Record<AppRoutes , string> = {
    [AppRoutes.MAIN] : '/', 
    [AppRoutes.ABOUT] : '/about', 
}

export const routeConfig = {
    [AppRoutes.ABOUT] : {
        path : RouterPath.about,
        element : RouterPath.main
    }
}