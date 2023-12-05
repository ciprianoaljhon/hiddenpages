import React from "react";
import { RiHeartsLine } from "react-icons/ri";
import {
  FaMagic,
  FaEye,
  FaSkull,
  FaCompass,
  FaBook,
  FaQuestionCircle,
  FaRocket,
  FaUser,
  FaBalanceScale,
  FaFlask,
  FaLandmark,
  FaPlane,
  FaLaugh,
  FaTheaterMasks,
  FaRegLaugh,
  FaGavel,
} from "react-icons/fa";

const useCardColors = () => {
  const colors = {
    default: {
      icon: <RiHeartsLine />,
      bgColor: "",
    },
    romance: {
      icon: <RiHeartsLine color="#FF0000" />,
      bgColor: "#FFD2E5",
    },
    fantasy: {
      icon: <FaMagic color="#800080" />,
      bgColor: "#E6E6FA",
    },
    mystery: {
      icon: <FaEye color="#A9A9A9" />,
      bgColor: "#BFD3C1",
    },
    horror: {
      icon: <FaSkull color="#000000" />,
      bgColor: "#AFAFAF",
    },
    adventure: {
      icon: <FaCompass color="#DAA520" />,
      bgColor: "#8B4513",
    },
    fiction: {
      icon: <FaBook color="#0000FF" />,
      bgColor: "#ADD8E6",
    },
    "non-fiction": {
      icon: <FaBook color="#FFA500" />,
      bgColor: "#FFEBCD",
    },
    "mystery/thriller": {
      icon: <FaQuestionCircle color="#FF4500" />,
      bgColor: "#F0F8FF",
    },
    "science fiction (sci-fi)": {
      icon: <FaRocket color="#3CB371" />,
      bgColor: "#F5FFFA",
    },
    biography: {
      icon: <FaUser color="#4B0082" />,
      bgColor: "#F8F8FF",
    },
    philosophy: {
      icon: <FaBalanceScale color="#FF1493" />,
      bgColor: "#FFFACD",
    },
    science: {
      icon: <FaFlask color="#008000" />,
      bgColor: "#F0FFF0",
    },
    history: {
      icon: <FaLandmark color="#CD853F" />,
      bgColor: "#FAEBD7",
    },
    travel: {
      icon: <FaPlane color="#000080" />,
      bgColor: "#F5F5DC",
    },
    comedy: {
      icon: <FaLaugh color="#FFD700" />,
      bgColor: "#FFFFE0",
    },
    drama: {
      icon: <FaTheaterMasks color="#800000" />,
      bgColor: "#FFE4E1",
    },
    "graphic novels/comics": {
      icon: <FaRegLaugh color="#8B0000" />,
      bgColor: "#FAFAD2",
    },
    crime: {
      icon: <FaGavel color="#800000" />,
      bgColor: "#FFF0F5",
    },
  };

  return colors;
};

export default useCardColors;
