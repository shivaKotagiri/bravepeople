"use client";

import { createContext, RefObject } from "react";

export const containerContext = createContext<RefObject<HTMLDivElement | null>>(null!);