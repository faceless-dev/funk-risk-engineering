'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Check, Clock, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import type { Notification } from '../data/notifications-data';

interface NotificationsListProps {
    notifications: Notification[];
}

export function NotificationsList({ notifications }: NotificationsListProps) {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter notifications based on search query
    const filteredNotifications = searchQuery
        ? notifications.filter(
              (notification) =>
                  notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  notification.message.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : notifications;

    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                    <h2 className="text-lg font-semibold">Alle Benachrichtigungen</h2>
                    <p className="text-sm text-muted-foreground">Übersicht aller Systembenachrichtigungen</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            className="pl-8 w-[200px]"
                            placeholder="Suchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button className="gap-1" size="sm" variant="outline">
                        <Filter className="h-4 w-4" />
                        Filter
                    </Button>
                </div>
            </div>

            <Tabs className="w-full" defaultValue="all">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="all">Alle</TabsTrigger>
                    <TabsTrigger value="unread">Ungelesen ({unreadCount})</TabsTrigger>
                </TabsList>

                <TabsContent className="mt-0" value="all">
                    <Card>
                        <CardContent className="p-6">
                            <div className="space-y-3">
                                {filteredNotifications.length > 0 ? (
                                    filteredNotifications.map((notification) => (
                                        <NotificationItem key={notification.id} notification={notification} />
                                    ))
                                ) : (
                                    <div className="text-center py-6 text-muted-foreground">Keine Benachrichtigungen gefunden</div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent className="mt-0" value="unread">
                    <Card>
                        <CardContent className="p-6">
                            <div className="space-y-3">
                                {filteredNotifications.filter((notification) => !notification.read).length > 0 ? (
                                    filteredNotifications
                                        .filter((notification) => !notification.read)
                                        .map((notification) => <NotificationItem key={notification.id} notification={notification} />)
                                ) : (
                                    <div className="text-center py-6 text-muted-foreground">Keine ungelesenen Benachrichtigungen</div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    );
}

function NotificationItem({ notification }: { notification: Notification }) {
    const getNotificationIcon = (type: Notification['type']) => {
        switch (type) {
            case 'case_response':
                return <Bell className={`h-5 w-5 ${notification.read ? 'text-gray-500' : 'text-blue-600'}`} />;
            case 'measure_overdue':
                return <Clock className={`h-5 w-5 ${notification.read ? 'text-gray-500' : 'text-red-600'}`} />;
            case 'case_created':
                return (
                    <svg
                        className={`h-5 w-5 ${notification.read ? 'text-gray-500' : 'text-green-600'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" x2="12" y1="18" y2="12" />
                        <line x1="9" x2="15" y1="15" y2="15" />
                    </svg>
                );
            case 'reminder':
                return (
                    <svg
                        className={`h-5 w-5 ${notification.read ? 'text-gray-500' : 'text-amber-600'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                );
            default:
                return <Bell className={`h-5 w-5 ${notification.read ? 'text-gray-500' : 'text-blue-600'}`} />;
        }
    };

    let linkedMessage: ReactNode = notification.message;

    if (notification.caseId) {
        linkedMessage = (
            <span>
                {notification.message.split(notification.caseId)[0]}
                <Link className="text-blue-600 hover:underline font-medium" href={`/cases/${notification.caseId}`}>
                    {notification.caseId}
                </Link>
                {notification.message.split(notification.caseId)[1]}
            </span>
        );
    } else if (notification.customerId) {
        linkedMessage = (
            <span>
                {notification.message.split('Acme Corp')[0]}
                <Link className="text-blue-600 hover:underline font-medium" href={`/customers/${notification.customerId}`}>
                    Acme Corp
                </Link>
                {notification.message.split('Acme Corp')[1]}
            </span>
        );
    }

    return (
        <div className={`flex items-start gap-4 rounded-lg border p-4 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}>
            <div className={`rounded-full p-2 ${notification.read ? 'bg-gray-100' : 'bg-blue-100'}`}>{getNotificationIcon(notification.type)}</div>

            <div className="flex-1">
                <div className={`font-medium ${notification.read ? '' : 'text-blue-800'}`}>{notification.title}</div>

                <div className="mt-1 text-sm">{linkedMessage}</div>

                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {notification.time}
                </div>
            </div>

            {!notification.read && (
                <Button className="mt-1" size="sm" variant="ghost">
                    <Check className="h-4 w-4" />
                    <span className="sr-only">Mark as read</span>
                </Button>
            )}
        </div>
    );
}
