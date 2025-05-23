'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LoadingAnimationProps {
    className?: string;
    color?: 'primary' | 'secondary' | 'accent' | 'muted';
    size?: 'sm' | 'md' | 'lg';
}

export function LoadingAnimation({ className, color = 'primary', size = 'md' }: LoadingAnimationProps) {
    const sizeClasses = {
        lg: 'h-12 w-12',
        md: 'h-8 w-8',
        sm: 'h-4 w-4',
    };

    const colorClasses = {
        accent: 'text-accent',
        muted: 'text-muted-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
    };

    const containerVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1.5,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    };

    const circleVariants = {
        animate: {
            opacity: [0.2, 1, 0.2],
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    };

    return (
        <motion.div animate="animate" className={cn('relative', sizeClasses[size], className)} variants={containerVariants}>
            <motion.div className={cn('absolute inset-0 rounded-full border-2 border-current opacity-20', colorClasses[color])} />
            <motion.div
                animate="animate"
                className={cn('absolute inset-0 rounded-full border-t-2 border-current', colorClasses[color])}
                variants={circleVariants}
            />
        </motion.div>
    );
}
