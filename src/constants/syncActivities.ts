export interface SyncActivityRecord {
  id: string;
  label: string;
  lastSync: string;
  status: "success" | "pending" | "error";
  icon: "users" | "calendar" | "door";
}

export const SYNC_ACTIVITIES: SyncActivityRecord[] = [
  {
    id: "guests",
    label: "integration.guestData",
    lastSync: "2026-02-25 14:32:44",
    status: "success",
    icon: "users",
  },
  {
    id: "reservations",
    label: "integration.reservations",
    lastSync: "2026-02-25 14:32:44",
    status: "success",
    icon: "calendar",
  },
  {
    id: "rooms",
    label: "integration.roomStatus",
    lastSync: "2026-02-25 14:32:44",
    status: "success",
    icon: "door",
  },
];
