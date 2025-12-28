"use client";

import { useCallback, useEffect, useRef } from "react";

interface Pixel {
    id: number;
    x: number;
    y: number;
    opacity: number;
    age: number;
}

const PIXEL_SIZE = 12;
const TRAIL_LENGTH = 10;
const FADE_SPEED = 0.04;
const START_COLOR = { r: 255, g: 255, b: 255 };
const END_COLOR = { r: 0, g: 0, b: 0 };

const interpolateColor = (t: number) => {
    const clamped = Math.min(1, Math.max(0, t));
    const r = Math.round(
        START_COLOR.r + (END_COLOR.r - START_COLOR.r) * clamped,
    );
    const g = Math.round(
        START_COLOR.g + (END_COLOR.g - START_COLOR.g) * clamped,
    );
    const b = Math.round(
        START_COLOR.b + (END_COLOR.b - START_COLOR.b) * clamped,
    );
    return `rgb(${r}, ${g}, ${b})`;
};

export function PixelCursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pixelsRef = useRef<Pixel[]>([]);
    const pixelIdRef = useRef(0);
    const lastPositionRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    const createPixel = useCallback((x: number, y: number) => {
        return {
            id: pixelIdRef.current++,
            x,
            y,
            opacity: 1,
            age: 0,
        };
    }, []);

    const handlePointerMove = useCallback(
        (event: PointerEvent) => {
            const x = event.clientX;
            const y = event.clientY;

            const dx = x - lastPositionRef.current.x;
            const dy = y - lastPositionRef.current.y;
            const distance = Math.hypot(dx, dy);

            if (distance > PIXEL_SIZE) {
                const newPixel = createPixel(x, y);
                if (pixelsRef.current.length >= TRAIL_LENGTH) {
                    pixelsRef.current.shift();
                }
                pixelsRef.current.push(newPixel);
                lastPositionRef.current = { x, y };
            }
        },
        [createPixel],
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("pointermove", handlePointerMove, {
            passive: true,
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            pixelsRef.current = pixelsRef.current
                .map(pixel => ({
                    ...pixel,
                    opacity: pixel.opacity - FADE_SPEED,
                    age: pixel.age + 1,
                }))
                .filter(pixel => pixel.opacity > 0);

            pixelsRef.current.forEach(pixel => {
                const sizeMultiplier = Math.max(0.3, 1 - pixel.age / 100);
                const currentSize = PIXEL_SIZE * sizeMultiplier;
                const colorProgress = 1 - pixel.opacity;

                ctx.globalAlpha = pixel.opacity;
                ctx.fillStyle = interpolateColor(colorProgress);
                ctx.fillRect(
                    pixel.x - currentSize / 2,
                    pixel.y - currentSize / 2,
                    currentSize,
                    currentSize,
                );
            });

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("pointermove", handlePointerMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [handlePointerMove]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50 w-screen h-screen select-none"
        />
    );
}
