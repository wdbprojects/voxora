import { routes } from "@/config/routes";
import {
  AudioLines,
  Gauge,
  Headphones,
  LayoutGrid,
  Settings2,
  Volume2,
} from "lucide-react";

export const sidebarData = {
  navMain: [
    {
      id: 1,
      title: "Getting Started",
      // url: "#",
      items: [
        {
          id: 1,
          title: "Dashboard",
          url: routes.dashboard,
          icon: Gauge,
        },
        {
          id: 2,
          title: "Explore Voices",
          url: routes.voices,
          icon: LayoutGrid,
        },
        {
          id: 3,
          title: "Text to speech",
          url: routes.textToSpeech,
          icon: AudioLines,
        },
        { id: 4, title: "Voice Cloning", url: "#", icon: Volume2 },
      ],
    },
    {
      id: 2,
      title: "Other Links",
      // url: "#",
      items: [
        { id: 1, title: "Settings", url: routes.settings, icon: Settings2 },
        {
          id: 2,
          title: "Help and Support",
          url: routes.support,
          icon: Headphones,
        },
      ],
    },
    /* {
      id: 3,
      title: "Getting Finished",
      url: "#",
      items: [
        { id: 1, title: "Data Fetching", url: "#", icon: SquareTerminal },
        { id: 2, title: "Rendering", url: "#", icon: Settings2 },
        { id: 3, title: "Optimizing", url: "#", icon: Bot },
      ],
    }, */
  ],
  user: {
    name: "Scarlett Johansson",
    email: "scarlett@hottt.com",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
};

export const TEXT_MAX_LENGTH = 5000;
export const COST_PER_UNIT = 0.0003;
