"use client"

import * as React from "react"
import Image from 'next/image'
import clsx from 'clsx'

interface NavButton {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'outline'
    onClick?: () => void
}

const Button: React.FC<NavButton> = React.memo(({
                                                    className,
                                                    children,
                                                    variant = 'default',
                                                    onClick
                                                }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
                'disabled:pointer-events-none disabled:opacity-50',
                'h-9 px-4',
                variant === 'default' && [
                    'bg-gradient-to-r from-purple-600 to-blue-600 text-white',
                    'hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25',
                ],
                variant === 'outline' && [
                    'border border-gray-600 text-gray-300',
                    'hover:border-purple-400 hover:text-white hover:bg-gray-800/50',
                ],
                className
            )}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'

interface NavItem {
    to?: string
    text: string
    items?: {
        text: string
        description?: string
        to: string
    }[]
}

interface HeaderProps {
    className?: string
    logo?: React.ReactNode | string
    logoSize?: 'sm' | 'md' | 'lg'
    menuItems?: NavItem[]
    rightContent?: React.ReactNode
}

const ChevronIcon = React.memo(() => (
    <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-2.5 opacity-60 transition-transform duration-200 group-hover:rotate-180"
    >
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
))

ChevronIcon.displayName = 'ChevronIcon'

interface NavItemProps {
    to?: string
    text: string
    hasItems: boolean
    subItems?: NavItem['items']
}

const NavItemComponent = React.memo(({ to, text, hasItems, subItems }: NavItemProps) => {
    const Tag = to ? 'a' : 'button'

    return (
        <li className="relative group">
            <Tag
                className={clsx(
                    'flex items-center gap-x-1.5 py-3 text-sm font-medium',
                    'text-gray-300 transition-colors duration-200',
                    'hover:text-white',
                    'bg-no-repeat bg-bottom bg-gradient-to-r from-purple-400 to-blue-400',
                    'hover:bg-[length:100%_2px] bg-[length:0_2px]',
                    'transition-all'
                )}
                href={to}
            >
                {text}
                {hasItems && <ChevronIcon />}
            </Tag>
            {hasItems && subItems && (
                <div
                    className={clsx(
                        'absolute -left-3 top-full w-56 pt-3',
                        'pointer-events-none opacity-0',
                        'origin-top-left transition-all duration-200 [transform:rotateX(-15deg)_scale(0.95)_translateY(-8px)]',
                        'group-hover:pointer-events-auto group-hover:opacity-100 group-hover:[transform:none]'
                    )}
                >
                    <ul
                        className={clsx(
                            'flex flex-col gap-y-1 rounded-lg border border-gray-700 bg-gray-900/95 p-2 shadow-xl',
                            'backdrop-blur-md'
                        )}
                    >
                        {subItems.map(({ text: itemText, description, to: itemTo }, idx) => (
                            <li key={idx}>
                                <a
                                    className={clsx(
                                        'block rounded-md px-3 py-2 transition-colors duration-150',
                                        'text-gray-200 hover:bg-gray-800 hover:text-white',
                                        'text-sm'
                                    )}
                                    href={itemTo}
                                >
                                    <span className="font-medium">{itemText}</span>
                                    {description && (
                                        <div className="mt-1 text-xs text-gray-400">
                                            {description}
                                        </div>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
})

NavItemComponent.displayName = 'NavItemComponent'

const Navigation = React.memo(({ items }: { items: NavItem[] }) => (
    <nav className="hidden lg:block flex-1">
        <ul className="flex justify-center gap-x-8">
            {items.map(({ to, text, items: subItems }, index) => (
                <NavItemComponent
                    key={index}
                    to={to}
                    text={text}
                    hasItems={!!(subItems && subItems.length > 0)}
                    subItems={subItems}
                />
            ))}
        </ul>
    </nav>
))

Navigation.displayName = 'Navigation'

const MobileMenuButton = React.memo(({ onClick }: { onClick: () => void }) => (
    <button
        className={clsx(
            'lg:hidden relative h-6 w-6 flex flex-col justify-center gap-1.5',
            'text-gray-300 hover:text-white transition-colors'
        )}
        onClick={onClick}
        aria-label="Toggle menu"
    >
        <span className="h-0.5 w-full bg-current rounded-full transition-all" />
        <span className="h-0.5 w-full bg-current rounded-full transition-all" />
        <span className="h-0.5 w-full bg-current rounded-full transition-all" />
    </button>
))

MobileMenuButton.displayName = 'MobileMenuButton'

interface LogoComponentProps {
    logo: React.ReactNode | string
    size?: 'sm' | 'md' | 'lg'
}

const LogoComponent = React.memo(({ logo, size = 'lg' }: LogoComponentProps) => {
    const sizeMap = {
        sm: { w: 32, h: 32 },
        md: { w: 40, h: 40 },
        lg: { w: 48, h: 48 }
    }

    const dimensions = sizeMap[size]

    if (typeof logo === 'string') {
        return (
            <Image
                src={logo}
                alt="Company Logo"
                width={dimensions.w}
                height={dimensions.h}
                priority={true}
                className="object-contain"
                sizes="(max-width: 768px) 32px, 40px"
            />
        )
    }

    return <div style={{ width: dimensions.w, height: dimensions.h }}>{logo}</div>
})

LogoComponent.displayName = 'LogoComponent'

export const Header: React.FC<HeaderProps> = React.memo(({
                                                             className,
                                                             logo,
                                                             logoSize = 'lg',
                                                             menuItems = [],
                                                             rightContent,
                                                         }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    const toggleMobileMenu = React.useCallback(() => {
        setIsMobileMenuOpen(prev => !prev)
    }, [])

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 w-full',
                'bg-gray-900/95 backdrop-blur-sm',
                'border-b border-gray-800',
                className
            )}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    {logo && (
                        <div className="flex-shrink-0">
                            <LogoComponent logo={logo} size={logoSize} />
                        </div>
                    )}

                    {/* Navigation - тепер по центру */}
                    <Navigation items={menuItems} />

                    {/* Right Content */}
                    <div className="flex items-center gap-x-3 ml-auto">
                        {rightContent}
                        <MobileMenuButton onClick={toggleMobileMenu} />
                    </div>
                </div>
            </div>
        </header>
    )
})

Header.displayName = 'Header'

export { Button }