import { BoxProps, useColorModeValue, Flex, Text, CloseButton, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { IconType } from "react-icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiLogOut
} from 'react-icons/fi';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavItem } from "../NavItem/NavItem";

interface LinkItemProps {
  type: string
  name: string;
  icon: IconType;
  path?: string;
}

interface LogoutItemProps {
  type: string
  name: string;
  icon: IconType;
  logout: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { signOut } = useContext(AuthContext)
  const LinkItems: Array<LinkItemProps | LogoutItemProps> = [
    { type: 'link', name: 'Home', icon: FiHome },
    { type: 'link', name: 'Trending', icon: FiTrendingUp },
    { type: 'link', name: 'Explore', icon: FiCompass },
    { type: 'link', name: 'Favourites', icon: FiStar },
    { type: 'logout', name: 'Sair', icon: FiLogOut, logout: signOut},
  ];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={link.type === 'logout' ? signOut : () => {}}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};