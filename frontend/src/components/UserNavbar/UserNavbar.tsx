import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Tooltip, UnstyledButton, Stack, rem, Center } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconTrophy,
  IconCertificate,
  IconEdit
} from '@tabler/icons-react';
import classes from './UserNavbar.module.css';
import BigAtHeartLogo from '../../assets/BigAtHeartLogo.webp';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const buttonArray = [
  { icon: IconHome2, label: 'Home', nav: '/' },
  { icon: IconTrophy, label: 'Leaderboard', nav: '/leaderboard' },
  { icon: IconCertificate, label: 'Certificates', nav:'/certificates' },
  { icon: IconEdit, label: 'Feedback', nav:'/feedback' },
  { icon: IconUser, label: 'Profile', nav:'/profile' },
  { icon: IconSettings, label: 'Settings', nav:'/settings' },
];

export function UserNavbar() {
  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  const links = buttonArray.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {navigate(link.nav); setActive(index);}}
    />
  ));

  return (
    <nav className={classes.navbar}>

<Center>
        <img src={BigAtHeartLogo} alt="My Logo" style={{ width: rem(60), height: rem(40) }} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}