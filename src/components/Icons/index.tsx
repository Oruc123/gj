import React from "react";
import {
  Bell,
  Edit2,
  Trash,
  MessageCircle,
  Search,
  ChevronDown,
  Map,
  ChevronUp,
  Tag,
  ArrowLeft,
  User,
  CheckCircle,
  Layout,
  MapPin,
  MessageSquare,
  Menu,
  Crosshair,
  Star as HalfStar,
  X,
  LogOut,
  Filter,
  Plus,
} from "react-feather";
import { ReactComponent as PlusSquare } from "./plus.svg";
import { ReactComponent as Spinner } from "./spinner.svg";
import { ReactComponent as Star } from "./star.svg";
import { ReactComponent as Google } from "./google.svg";
type IconProps = {
  color?: string;
  size?: number;
};

const defaultColor = "#6C82AC";
const defaultSize = 16;

export const ISearch: React.FC<IconProps> = ({
  color = defaultColor,
  size = defaultSize,
}) => {
  return <Search color={color} width={size} />;
};
export const IBell: React.FC<IconProps> = ({
  color = defaultColor,
  size = defaultSize,
}) => {
  return <Bell color={color} size={size} />;
};
export const IChevronDown: React.FC<IconProps> = ({
  color = "#B3C0D9",
  size = defaultSize,
}) => {
  return <ChevronDown color={color} size={size} />;
};
export const IFilter: React.FC<IconProps> = ({
  color = "#6C82AC",
  size = defaultSize,
}) => {
  return <Filter color={color} size={size} />;
};
export const IChevronUp: React.FC<IconProps> = ({
  color = "#283BC1",
  size = defaultSize,
}) => {
  return <ChevronUp color={color} size={size} />;
};
export const ILeft: React.FC<IconProps> = ({ size = defaultSize }) => {
  return <ArrowLeft size={size} />;
};
export const IPlus: React.FC<IconProps> = () => {
  return <PlusSquare width={22} />;
};
export const IGoogle: React.FC<IconProps> = () => {
  return (
    <Google style={{ display: "inline-block", transform: "translateY(4px)" }} />
  );
};
export const ICheckCircle: React.FC<IconProps> = ({
  size = defaultSize,
  color = "#55AE35",
}) => {
  return <CheckCircle size={size} color={color} />;
};
export const IMapPin: React.FC<IconProps> = ({
  size = defaultSize,
  color = defaultColor,
}) => {
  return <MapPin width={size} color={color} />;
};
export const IDashBoard: React.FC<IconProps> = ({ size = defaultSize }) => {
  return <Layout size={size} />;
};

export const IMessage: React.FC<IconProps> = ({
  size = defaultSize,
  color,
}) => {
  return <MessageSquare color={color} size={size} />;
};
export const IUser: React.FC<IconProps> = ({ size = defaultSize, color }) => {
  return <User color={color} size={size} />;
};

export const ITarget: React.FC<IconProps> = ({ size = defaultSize, color }) => {
  return <Crosshair color={color} size={size} />;
};
export const ILocation: React.FC<IconProps> = ({
  size = defaultSize,
  color,
}) => {
  return <Map color={color} size={size} />;
};
export const ISpinner = ({
  width = "34px",
  height = "34px",
}: {
  width?: string;
  height?: string;
}) => {
  return <Spinner style={{ display: "block", width: width, height: height }} />;
};
export const IStar = () => {
  return <Star />;
};
export const IStarHalf: React.FC<IconProps> = ({
  size = defaultSize,
  color,
}) => {
  return <HalfStar color={color} size={size} />;
};
export const ITag: React.FC<IconProps> = ({ size = defaultSize, color }) => {
  return <Tag color={color} size={size} />;
};
export const IMessageRounded: React.FC<IconProps> = ({
  size = defaultSize,
  color,
}) => {
  return <MessageCircle color={color} size={size} />;
};
export const IEdit: React.FC<IconProps> = ({ size = defaultSize, color }) => {
  return <Edit2 color={color} size={size} />;
};
export const IDelete: React.FC<IconProps> = ({ size = defaultSize, color }) => {
  return <Trash color={color} size={size} />;
};
export const IMenu: React.FC<IconProps> = ({
  size = defaultSize,
  color = "#000",
}) => {
  return <Menu color={color} size={size} />;
};
export const IClose: React.FC<IconProps> = ({
  size = defaultSize,
  color = "#000",
}) => {
  return <X color={color} size={size} />;
};
export const ILogout: React.FC<IconProps> = ({
  size = defaultSize,
  color = defaultColor,
}) => {
  return <LogOut color={color} size={size} />;
};
export const IPlusSimple: React.FC<IconProps> = ({ size = defaultSize }) => {
  return <Plus size={size} />;
};
