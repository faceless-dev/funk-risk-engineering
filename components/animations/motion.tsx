'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Fade in animation
export const FadeIn = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}) => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            className={cn(className)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ delay, duration, ease: 'easeInOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Slide up animation
export const SlideUp = ({
    children,
    className,
    delay = 0,
    distance = 20,
    duration = 0.5,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
    duration?: number;
}) => {
    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            className={cn(className)}
            exit={{ opacity: 0, y: distance }}
            initial={{ opacity: 0, y: distance }}
            transition={{ delay, duration, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Slide in from left animation
export const SlideInLeft = ({
    children,
    className,
    delay = 0,
    distance = 20,
    duration = 0.5,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
    duration?: number;
}) => {
    return (
        <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={cn(className)}
            exit={{ opacity: 0, x: -distance }}
            initial={{ opacity: 0, x: -distance }}
            transition={{ delay, duration, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Slide in from right animation
export const SlideInRight = ({
    children,
    className,
    delay = 0,
    distance = 20,
    duration = 0.5,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
    duration?: number;
}) => {
    return (
        <motion.div
            animate={{ opacity: 1, x: 0 }}
            className={cn(className)}
            exit={{ opacity: 0, x: distance }}
            initial={{ opacity: 0, x: distance }}
            transition={{ delay, duration, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Scale animation
export const Scale = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}) => {
    return (
        <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className={cn(className)}
            exit={{ opacity: 0, scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay, duration, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Staggered children animation
export const Stagger = ({
    children,
    className,
    staggerDelay = 0.1,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) => {
    return (
        <motion.div
            animate="visible"
            className={cn(className)}
            exit="hidden"
            initial="hidden"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Stagger item - to be used inside Stagger
export const StaggerItem = ({
    children,
    className,
    duration = 0.5,
    ...props
}: {
    [key: string]: any;
    children: ReactNode;
    className?: string;
    duration?: number;
}) => {
    return (
        <motion.div
            className={cn(className)}
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, transition: { duration, ease: 'easeOut' }, y: 0 },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Hover animation for cards and buttons
export const HoverCard = ({ children, className, ...props }: { [key: string]: any; children: ReactNode; className?: string }) => {
    return (
        <motion.div className={cn(className)} transition={{ duration: 0.2 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} {...props}>
            {children}
        </motion.div>
    );
};

// Pulse animation for notifications or highlights
export const Pulse = ({ children, className, ...props }: { [key: string]: any; children: ReactNode; className?: string }) => {
    return (
        <motion.div
            animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.05, 1],
            }}
            className={cn(className)}
            transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};
