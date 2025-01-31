//Types
import { contactMethodType } from "@utilities/types/contact/contact-methods.types";

//Images
import { SVG_ICONS } from "@assets/index.assets";

/**
 * Methods of contact to create the contact cards
 */
export const contactMethods: contactMethodType = [
  {
    icon: SVG_ICONS.contactIcons.EMAIL,
    platform: "Email",
    user: " ",
    link: " ",
  },
  {
    icon: SVG_ICONS.contactIcons.SLACK,
    platform: "Slack",
    user: " ",
    link: " ",
  },
  {
    icon: SVG_ICONS.contactIcons.WHATSAPP,
    platform: "WhatsApp",
    user: " ",
    link: " ",
  },
];
