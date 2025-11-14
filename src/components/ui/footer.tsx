interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer = ({
                    logo = {
                        src: "https://www.shadcnblocks.com/images/block/block-1.svg",
                        alt: "blocks for shadcn/ui",
                        title: "Our Web Studio Lemoners",
                        url: "https://www.shadcnblocks.com",
                    },
                    menuItems = [
                        {
                            title: "Product",
                            links: [
                                { text: "Overview", url: "#" },
                                { text: "Pricing", url: "#" },
                                { text: "Marketplace", url: "#" },
                                { text: "Features", url: "#" },
                                { text: "Integrations", url: "#" },
                            ],
                        },
                        {
                            title: "Company",
                            links: [
                                { text: "About", url: "#" },
                                { text: "Team", url: "#" },
                                { text: "Blog", url: "#" },
                                { text: "Careers", url: "#" },
                            ],
                        },
                        {
                            title: "Resources",
                            links: [
                                { text: "Help", url: "#" },
                                { text: "Sales", url: "#" },
                                { text: "Advertise", url: "#" },
                            ],
                        },
                        {
                            title: "Social",
                            links: [
                                { text: "Twitter", url: "#" },
                                { text: "Instagram", url: "#" },
                                { text: "LinkedIn", url: "#" },
                            ],
                        },
                    ],
                    copyright = "© 2024 Copyright. All rights reserved.",
                    bottomLinks = [
                        { text: "Terms and Conditions", url: "#" },
                        { text: "Privacy Policy", url: "#" },
                    ],
                }: FooterProps) => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <footer>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2">
                                <a href={logo.url}>
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        title={logo.title}
                                        className="h-8"
                                    />
                                </a>
                                <p className="text-lg font-semibold">{logo.title}</p>
                            </div>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-3 text-sm font-bold">{section.title}</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-primary transition-colors"
                                        >
                                            <a href={link.url}>{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="hover:text-primary transition-colors">
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer };