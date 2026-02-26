export interface ErrorRecord {
  date: string;
  type: string;
  description: string;
}

export const ERROR_DATA: ErrorRecord[] = [
  {
    date: "2026-02-17 09:44",
    type: "Sync Timeout",
    description: "Room status sync timed out after 30s",
  },
  {
    date: "2026-02-16 22:10",
    type: "Rate Limit",
    description: "API rate limit exceeded, retried after 60s",
  },
  {
    date: "2026-02-16 14:30",
    type: "Data Mismatch",
    description: "Reservation #4821 had invalid room reference",
  },
  {
    date: "2026-02-15 08:15",
    type: "Auth Warning",
    description: "Token refresh triggered automatically",
  },
  {
    date: "2026-02-14 19:00",
    type: "Sync Timeout",
    description: "Guest data sync timed out during peak hours",
  },
];
