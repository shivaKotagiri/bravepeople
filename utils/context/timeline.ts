"use client";

import { createContext } from "react";
export const timelineContext = createContext<gsap.core.Timeline | null>(null);