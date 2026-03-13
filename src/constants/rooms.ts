export type Room = {
  roomNumber: number;
  roomType: string;
  qrStatus: "generated" | "notGenerated";
};

export const ROOMS: Room[] = [
  { roomNumber: 101, roomType: "SOLO", qrStatus: "generated" },
  { roomNumber: 102, roomType: "Double Room", qrStatus: "generated" },
  { roomNumber: 201, roomType: "Twin Room", qrStatus: "generated" },
  { roomNumber: 202, roomType: "Triple Room", qrStatus: "notGenerated" },
  { roomNumber: 301, roomType: "SPINNER Double Room", qrStatus: "generated" },
  { roomNumber: 302, roomType: "EPISODE SPECIAL", qrStatus: "notGenerated" },
  { roomNumber: 401, roomType: "Accessible Twin Room", qrStatus: "generated" },
  { roomNumber: 402, roomType: "Spinner Triple", qrStatus: "notGenerated" },
];
