import { Avatar, Button } from '@/components';
import { Contact } from '@/utils';

export interface ContactItemProps {
  key: number;
  item: Contact;
  removeItem(): any;
}

function ContactItem({ key, item, removeItem }: ContactItemProps) {
  return (
    <tr key={key}>
      <td>
        <Avatar name={item.name} />
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phoneNumber}</td>
      <td>
        <Button size="sm" outline onClick={removeItem}>
          Remove
        </Button>
      </td>
    </tr>
  );
}
export default ContactItem;
