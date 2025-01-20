import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

export type TSidebarItems = {
    key: string,
    label: ReactNode,
    children?: TSidebarItems[]
} | undefined;
type TUserPath = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TUserPath[]
}

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
    const sideBarItems = items.reduce((acc: TSidebarItems[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => {
                    if (child.name) {
                        return {
                            key: child.name,
                            label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                        }
                    }
                })
            })
        }

        return acc
    }, [])

    return sideBarItems;
}