'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Link from 'next/link';

interface CustomerData {
    customer: string;
    id: string;
    implemented: number;
    open: number;
    overdue: number;
    total: number;
}

interface CustomerStatusCardProps {
    customers: CustomerData[];
    totalCustomers: number;
}

export function CustomerStatusCard({ customers, totalCustomers }: CustomerStatusCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="space-y-1.5">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: 'reverse',
                            }}
                        >
                            <Users className="h-5 w-5 text-blue-600" />
                        </motion.div>
                        <span>Aktueller Status</span>
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">Kunden mit den meisten offenen Maßnahmen</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {customers.map((item, index) => (
                        <motion.div
                            key={index}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <div className="flex justify-between items-center">
                                <div className="font-medium text-base flex items-center">
                                    <motion.div
                                        animate={{
                                            scale: item.overdue > 0 ? [1, 1.5, 1] : 1,
                                        }}
                                        className={`h-2 w-2 rounded-full ${item.overdue > 0 ? 'bg-rose-400' : 'bg-blue-400'}`}
                                        transition={{
                                            duration: 1.5,
                                            repeat: item.overdue > 0 ? Number.POSITIVE_INFINITY : 0,
                                            repeatType: 'reverse',
                                        }}
                                    />
                                    <Link className="ml-2 hover:text-blue-600 hover:underline" href={`/customers/${item.id}`}>
                                        {item.customer}
                                    </Link>
                                </div>
                                <div className="text-sm">
                                    <span className="font-medium">{item.open} offen</span>
                                    {item.overdue > 0 && <span className="text-rose-500 ml-2">({item.overdue} überfällig)</span>}
                                </div>
                            </div>
                            <motion.div
                                className="h-8 w-full bg-gray-100 rounded-md overflow-hidden flex cursor-pointer"
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => (window.location.href = `/customers/${item.id}`)}
                            >
                                {/* Implemented measures */}
                                <motion.div
                                    animate={{ width: `${(item.implemented / item.total) * 100}%` }}
                                    className="h-full bg-emerald-400 flex items-center justify-center text-white font-medium"
                                    initial={{ width: 0 }}
                                    style={{ width: `${(item.implemented / item.total) * 100}%` }}
                                    transition={{ delay: 0.3 + 0.1 * index, duration: 1 }}
                                >
                                    {item.implemented}
                                </motion.div>
                                {/* Open measures (not overdue) */}
                                <motion.div
                                    animate={{ width: `${((item.open - item.overdue) / item.total) * 100}%` }}
                                    className="h-full bg-blue-400 flex items-center justify-center text-white font-medium"
                                    initial={{ width: 0 }}
                                    style={{ width: `${((item.open - item.overdue) / item.total) * 100}%` }}
                                    transition={{ delay: 0.5 + 0.1 * index, duration: 1 }}
                                >
                                    {item.open - item.overdue}
                                </motion.div>
                                {/* Overdue measures */}
                                {item.overdue > 0 && (
                                    <motion.div
                                        animate={{ width: `${(item.overdue / item.total) * 100}%` }}
                                        className="h-full bg-rose-400 flex items-center justify-center text-white font-medium"
                                        initial={{ width: 0 }}
                                        style={{ width: `${(item.overdue / item.total) * 100}%` }}
                                        transition={{ delay: 0.7 + 0.1 * index, duration: 1 }}
                                    >
                                        {item.overdue}
                                    </motion.div>
                                )}
                            </motion.div>
                            <div className="flex text-xs text-muted-foreground">
                                <div className="flex items-center mr-4">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-sm mr-1" />
                                    Umgesetzt
                                </div>
                                <div className="flex items-center mr-4">
                                    <div className="w-3 h-3 bg-blue-400 rounded-sm mr-1" />
                                    Offen
                                </div>
                                {item.overdue > 0 && (
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-rose-400 rounded-sm mr-1" />
                                        Überfällig
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    <motion.div
                        animate={{ opacity: 1 }}
                        className="text-sm text-muted-foreground text-center pt-4 border-t mt-4"
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        Zeigt {customers.length} von {totalCustomers} Kunden
                    </motion.div>
                </div>
            </CardContent>
        </Card>
    );
}
