import { FC } from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
  name?: string | null;
}
function getInitials(name: string): string {
  const nameArray = name.split(' ');
  const initials = nameArray
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
  return initials;
}
export const Avatar: FC<AvatarProps> = ({ name }) => {
  //console.log(`name=[${name}]`);
  const initials = getInitials(name ? name : '');
  return <div className={styles.avatar}>{initials}</div>;
};
