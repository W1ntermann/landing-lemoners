'use client'

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
interface FAQItemData {
    question: string;
    answer: string;
}

interface FAQProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    subtitle?: string;
    categories: Record<string, string>;
    faqData: Record<string, FAQItemData[]>;
    className?: string;
}

// Main reusable FAQ component
export const FAQ: React.FC<FAQProps> = ({
                                            title = "FAQs",
                                            subtitle = "Frequently Asked Questions",
                                            categories,
                                            faqData,
                                            className,
                                            ...props
                                        }) => {
    const categoryKeys = Object.keys(categories);
    const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

    return (
        <section
            className={cn(
                "relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 px-6 py-16 lg:py-24 text-foreground",
                className
            )}
            {...props}
        >
            <div className="container mx-auto max-w-6xl">
                <FAQHeader title={title} subtitle={subtitle} />
                <FAQTabs
                    categories={categories}
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                />
                <FAQList faqData={faqData} selected={selectedCategory} />
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        </section>
    );
};

interface FAQHeaderProps {
    title: string;
    subtitle: string;
}

const FAQHeader: React.FC<FAQHeaderProps> = ({ title, subtitle }) => (
    <div className="relative z-10 flex flex-col items-center justify-center text-center mb-16">
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold text-transparent tracking-wide uppercase text-sm"
        >
            {subtitle}
        </motion.span>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
        >
            {title}
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    </div>
);

interface FAQTabsProps {
    categories: Record<string, string>;
    selected: string;
    setSelected: (key: string) => void;
}

const FAQTabs: React.FC<FAQTabsProps> = ({ categories, selected, setSelected }) => (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mb-16">
        {Object.entries(categories).map(([key, label]) => (
            <motion.button
                key={key}
                onClick={() => setSelected(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative overflow-hidden whitespace-nowrap rounded-full border-2 px-6 py-3 text-base font-semibold transition-all duration-300 shadow-sm",
                    selected === key
                        ? "border-blue-500 text-white shadow-lg shadow-blue-500/25"
                        : "border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 backdrop-blur-sm"
                )}
            >
                <span className="relative z-10 transition-colors duration-300">
                    {label}
                </span>
                <AnimatePresence>
                    {selected === key && (
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-600"
                        />
                    )}
                </AnimatePresence>
            </motion.button>
        ))}
    </div>
);

interface FAQListProps {
    faqData: Record<string, FAQItemData[]>;
    selected: string;
}

const FAQList: React.FC<FAQListProps> = ({ faqData, selected }) => (
    <div className="mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
            {Object.entries(faqData).map(([category, questions]) => {
                if (selected === category) {
                    return (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            {questions.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <FAQItem {...faq} />
                                </motion.div>
                            ))}
                        </motion.div>
                    );
                }
                return null;
            })}
        </AnimatePresence>
    </div>
);

const FAQItem: React.FC<FAQItemData> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            animate={isOpen ? "open" : "closed"}
            className={cn(
                "group rounded-2xl border-2 transition-all duration-300 shadow-sm hover:shadow-md",
                isOpen
                    ? "bg-white/90 dark:bg-gray-800/90 border-blue-200 dark:border-blue-800 shadow-lg"
                    : "bg-white/70 dark:bg-gray-800/70 border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900"
            )}
            whileHover={{ y: -2 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left"
            >
                <motion.span
                    className={cn(
                        "text-lg font-semibold transition-colors duration-300 pr-8",
                        isOpen
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                    )}
                    layout="position"
                >
                    {question}
                </motion.span>
                <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        variants={{
                            open: { rotate: 180, scale: 1.1 },
                            closed: { rotate: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={cn(
                            "p-2 rounded-full transition-colors",
                            isOpen
                                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-500"
                        )}
                    >
                        {isOpen ? (
                            <Minus className="h-5 w-5" />
                        ) : (
                            <Plus className="h-5 w-5" />
                        )}
                    </motion.div>
                </motion.div>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2, ease: "easeInOut" }
                }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                    >
                        {answer}
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};