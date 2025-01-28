import { useState } from "react";

interface SkillItem {
    id: number;
    name: string;
    Image: string;
    width: number;
    height: number;
}

interface LogoWallProps {
    items: SkillItem[];
    direction?: "horizontal" | "vertical";
    pauseOnHover?: boolean;
    size?: string;
    duration?: string;
    textColor?: string;
    bgColor?: string;
    bgAccentColor?: string;
}

function LogoWall({
    items,
    direction = "horizontal",
    pauseOnHover = false,
    size = "clamp(8rem, 1rem + 30vmin, 25rem)",
    duration = "60s",
    textColor = "#ffffff",
    bgColor = "#060606",
    bgAccentColor = "#111111",
}: LogoWallProps) {
    const [isPaused, setIsPaused] = useState(false);

    const wrapperClass = [
        "flex",
        "flex-col",
        "gap-[calc(var(--size)/14)]",
        "mx-auto",
        "max-w-full",
        "p-[20px_10px]",
        direction === "vertical" && "flex-row justify-center h-full",
    ]
        .filter(Boolean)
        .join(" ");

    const marqueeClass = [
        "relative",
        "flex",
        "overflow-hidden",
        "select-none",
        "gap-[calc(var(--size)/14)]",
        "justify-start",
        "w-full",
        "mask-horizontal",
        direction === "vertical" && "flex-col h-full mask-vertical",
        isPaused && "paused",
    ]
        .filter(Boolean)
        .join(" ");

    const trackClass = [
        "flex-shrink-0",
        "flex",
        "items-center",
        "justify-around",
        "gap-[calc(var(--size)/14)]",
        "min-w-full",
        "animate-scrollX",
        direction === "vertical" && "flex-col min-h-full animate-scrollY",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <article
            className={wrapperClass}
            style={{
                ["--size" as any]: size,
                ["--duration" as any]: duration,
                ["--color-text" as any]: textColor,
                ["--color-bg" as any]: bgColor,
                ["--color-bg-accent" as any]: bgAccentColor,
                color: "var(--color-text)",
                backgroundColor: "var(--color-bg)",
            }}
        >
            {/* Premier groupe de logos */}
            <div
                className={marqueeClass}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
                <div className={trackClass}>
                    {items.map((item) => (
                        <img
                            key={`track1-${item.id}`}
                            src={item.Image}
                            alt={item.name}
                            style={{
                                width: `${item.width}px`,
                                height: `${item.height}px`,
                            }}
                            className="bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video p-[calc(var(--size)/10)]"
                        />
                    ))}
                </div>
                {/* Copie pour le défilement infini */}
                <div className={`${trackClass}`}>
                    {items.map((item) => (
                        <img
                            key={`track1-copy-${item.id}`}
                            src={item.Image}
                            alt={item.name}
                            style={{
                                width: `${item.width}px`,
                                height: `${item.height}px`,
                            }}
                            className="bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video p-[calc(var(--size)/10)]"
                        />
                    ))}
                </div>
            </div>

            {/* Deuxième groupe de logos (direction inverse) */}
            <div
                className={marqueeClass}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
                <div className={`${trackClass} reverse-x`}>
                    {items.map((item) => (
                        <img
                            key={`track2-${item.id}`}
                            src={item.Image}
                            alt={item.name}
                            style={{
                                width: `${item.width}px`,
                                height: `${item.height}px`,
                            }}
                            className="bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video p-[calc(var(--size)/10)]"
                        />
                    ))}
                </div>
                {/* Copie pour le défilement infini */}
                <div className={`${trackClass} reverse-x`}>
                    {items.map((item) => (
                        <img
                            key={`track2-copy-${item.id}`}
                            src={item.Image}
                            alt={item.name}
                            style={{
                                width: `${item.width}px`,
                                height: `${item.height}px`,
                            }}
                            className="bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video p-[calc(var(--size)/10)]"
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}

export default LogoWall;
