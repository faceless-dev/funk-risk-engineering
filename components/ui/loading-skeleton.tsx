'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LoadingAnimation } from '@/components/ui/loading-animation';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
    cardClassName?: string;
    showHeader?: boolean;
    title?: string;
}

export function LoadingSkeleton({ cardClassName = '', showHeader = true, title = 'Loading...' }: LoadingSkeletonProps) {
    return (
        <motion.div animate={{ opacity: 1 }} className="flex flex-col gap-6" initial={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {showHeader && (
                <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-10 w-32" />
                </div>
            )}

            <Card className={cardClassName}>
                <CardHeader className="gap-2 pb-6">
                    <CardTitle className="flex items-center gap-2">
                        <LoadingAnimation color="muted" size="sm" />
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <motion.div
                        animate={{ width: '100%' }}
                        initial={{ width: '60%' }}
                        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
                    >
                        <Skeleton className="h-4 w-full" />
                    </motion.div>
                    <motion.div
                        animate={{ width: '90%' }}
                        initial={{ width: '40%' }}
                        transition={{
                            delay: 0.2,
                            duration: 1.8,
                            ease: 'easeInOut',
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: 'reverse',
                        }}
                    >
                        <Skeleton className="h-4 w-[90%]" />
                    </motion.div>
                    <motion.div
                        animate={{ width: '80%' }}
                        initial={{ width: '30%' }}
                        transition={{
                            delay: 0.4,
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: 'reverse',
                        }}
                    >
                        <Skeleton className="h-4 w-[80%]" />
                    </motion.div>
                    <motion.div
                        animate={{ width: '70%' }}
                        initial={{ width: '20%' }}
                        transition={{
                            delay: 0.6,
                            duration: 2.2,
                            ease: 'easeInOut',
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: 'reverse',
                        }}
                    >
                        <Skeleton className="h-4 w-[70%]" />
                    </motion.div>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
            </div>
        </motion.div>
    );
}
