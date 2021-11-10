import { DetectionType } from "./purify";

export interface Rules {
  /** Number of seconds to focus on a region to proceed */
  focusDuration: number;

  regionMapping: { [r in RegionType]: DetectionType[] }

  showGaze: boolean;
  allowSkipImage: boolean;
  softFilter: 'pixelate' | 'saturate';
  playSounds: boolean;
  fullscreen: boolean;
  shuffleGallery: boolean;
}

export type RegionType = 'FOCUS' | 'SOFT_PUNISH' | 'HARD_PUNISH'

export const defaultRules: Rules = {
  focusDuration: 2,
  regionMapping: {
    FOCUS : ['FACE_FEMALE','FACE_MALE','MALE_GENITALIA_EXPOSED','MALE_GENITALIA_COVERED','ARMPITS_EXPOSED', 'FEET_COVERED', 'FEET_EXPOSED', 'BELLY_EXPOSED', 'BELLY_COVERED'],
    SOFT_PUNISH: [
      'FEMALE_BREAST_COVERED',
      'FEMALE_GENITALIA_COVERED',
      'BUTTOCKS_EXPOSED',
    ],
    HARD_PUNISH: [
      'FEMALE_BREAST_EXPOSED',
      'FEMALE_GENITALIA_EXPOSED',
      'ANUS_EXPOSED',
    ]
  },
  showGaze: true,
  allowSkipImage: true,
  softFilter: 'saturate',
  playSounds: true,
  fullscreen: false,
  shuffleGallery: true,
};
