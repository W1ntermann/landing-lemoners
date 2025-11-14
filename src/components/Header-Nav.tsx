// components/ui/navbar/demo.tsx
"use client"

import * as React from "react"
import { Header, Button } from "@/components/ui/navbar"
import { User } from "lucide-react"

const menuItems = [
    {
        text: "Menu 1",
        items: [
            {
                text: "Submenu 1.1",
                description: "Description for submenu 1.1",
                to: "/menu1/submenu1",
            },
            {
                text: "Submenu 1.2",
                description: "Description for submenu 1.2",
                to: "/menu1/submenu2",
            }
        ]
    },
    {
        text: "Menu 2",
        to: "/menu2"
    },
    {
        text: "Menu 3",
        items: [
            {
                text: "Submenu 3.1",
                description: "Description for submenu 3.1",
                to: "/menu3/submenu1",
            },
            {
                text: "Submenu 3.2",
                description: "Description for submenu 3.2",
                to: "/menu3/submenu2",
            }
        ]
    }
]

export const HeaderNav = () => {
    return (
        <div className="w-full bg-[#0B0C0F] min-h-[200px]">
            <Header
                theme="dark"
                logo={<span className="text-xl font-bold text-white">Lemoners</span>}
                menuItems={menuItems}
                rightContent={
                    <Button
                        variant="outline"
                        className="text-white"
                    >
                        <User className="mr-2 h-4 w-4" />
                        Button 1
                    </Button>
                }
            />
        </div>
    )
}