import React, { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string;
    resize?: "none" | "vertical" | "horizontal" | "both";
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, label, id, rows = 4, resize = "vertical", ...props }, ref) => {
        const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

        const resizeClasses = {
            none: "resize-none",
            vertical: "resize-y",
            horizontal: "resize-x",
            both: "resize"
        };

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="text-white font-medium mb-2 block text-sm"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    id={textareaId}
                    rows={rows}
                    className={cn(
                        "flex w-full rounded-md border bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
                        resizeClasses[resize],
                        error
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/20 focus:ring-purple-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };