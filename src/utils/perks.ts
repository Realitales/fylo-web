//images
import accessIMG from "../assets/icon-access-anywhere.svg";
import securityIMG from "../assets/icon-security.svg";
import realtimeIMG from "../assets/icon-collaboration.svg";
import storeIMG from "../assets/icon-any-file.svg";

export const perks = [
  {
    name: "access",
    header: "Access your files, anywhere",
    message:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    image: accessIMG,
  },
  {
    name: "security",
    header: "Security you can trust",
    message:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    image: securityIMG,
  },
  {
    name: "realtime",
    header: "Real-time collaboration",
    message:
      "Securely share files and folders with friends, family, colleagues for live collaboration. No email attachments required.",
    image: realtimeIMG,
  },
  {
    name: "store",
    header: "Store any type of file",
    message:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    image: storeIMG,
  },
];

export default perks;
