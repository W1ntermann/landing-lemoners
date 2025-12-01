"use client"

import { Header } from "@/components/ui/navbar"

const menuItems = [
    {
        text: "Послуги",
        items: [
            { text: "Веб-розробка", description: "Сучасні сайти та додатки", to: "/services/web" },
            { text: "Дизайн", description: "UI/UX дизайн", to: "/services/design" },
            { text: "Маркетинг", description: "Просування бізнесу", to: "/services/marketing" },
        ],
    },
    { text: "Портфоліо", to: "/portfolio" },
    { text: "Про нас", to: "/about" },
    { text: "Контакти", to: "/contact" },
]

export default function HeaderNav() {
    return (
        <Header
            logo="/logo-lemoners.jpg"
            logoSize="lg"
            menuItems={menuItems}
        />
    )
}