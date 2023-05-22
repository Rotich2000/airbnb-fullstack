import { Listing, Reservation, User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

export type safeListing = Omit<Listing, "createdAt">&{
    createdAt: string
}

export type safeReservation = Omit<Reservation, "createdAt" | "startDate" | "endDate"> &{
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: safeListing;
}
