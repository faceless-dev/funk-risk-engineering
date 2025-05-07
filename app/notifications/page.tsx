import { NotificationsList } from "./components/notifications-list"
import { getNotificationsData } from "./data/notifications-data"

export default function NotificationsPage() {
  const notifications = getNotificationsData()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Benachrichtigungen</h1>
      <NotificationsList notifications={notifications} />
    </div>
  )
}

