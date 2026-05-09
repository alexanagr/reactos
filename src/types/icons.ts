import {
  RiCloudOffLine,
  RiCloudLine,
  RiInformationLine,
  RiStickyNoteFill,
} from "@remixicon/react";

/**
 * Named exports
 */

export const OfflineIcon = RiCloudOffLine;
export const OnlineIcon = RiCloudLine;
export const InfoIcon = RiInformationLine;

export const SuccessIcon = RiStickyNoteFill;


export const osIcons = {
  offline: OfflineIcon,
  online: OnlineIcon,
  info: InfoIcon,
  success: SuccessIcon,
};

export type NotificationIconType =
  keyof typeof osIcons;