'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface StatCardProps {
    borderColor: string;
    description: string;
    icon: ReactNode;
    iconColor: string;
    linkTo?: string;
    title: string;
    value: string | number;
}

export function StatCard({ borderColor, description, icon, iconColor, linkTo, title, value }: StatCardProps & { linkTo?: string }) {
    const CardWrapper = linkTo ? Link : 'div';

    return (
        <CardWrapper className={`border-l-4 ${borderColor} ${linkTo ? 'block transition-all' : ''}`} href={linkTo || '#'}>
            <motion.div
                transition={{ duration: 0.2 }}
                whileHover={linkTo ? { boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', scale: 1.02 } : {}}
                whileTap={linkTo ? { scale: 0.98 } : {}}
            >
                <Card className="border-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <motion.span
                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                className={iconColor}
                                transition={{ duration: 2, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
                            >
                                {icon}
                            </motion.span>
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <motion.div
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-bold text-gray-800"
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {value}
                        </motion.div>
                        <p className="text-xs text-gray-500">{description}</p>
                    </CardContent>
                </Card>
            </motion.div>
        </CardWrapper>
    );
}
