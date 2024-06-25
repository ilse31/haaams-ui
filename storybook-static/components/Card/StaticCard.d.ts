import { LucideIcon } from 'lucide-react';

import * as React from "react";
declare const statisticsCardVariant: readonly ["primary", "secondary", "danger", "warning", "success"];
type StatisticsCardVariant = (typeof statisticsCardVariant)[number];
type StatisticsCardProps = {
    icon?: LucideIcon;
    iconClassName?: string;
    isLoading?: boolean;
    label: string;
    value: number;
    variant?: StatisticsCardVariant;
} & React.ComponentPropsWithoutRef<"div">;
export default function StatisticsCard({ className, icon: Icon, iconClassName, isLoading, label, value, variant, ...rest }: StatisticsCardProps): import("react/jsx-runtime").JSX.Element;
export {};
