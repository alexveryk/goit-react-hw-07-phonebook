import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleName = (contacts, filter) => {
  const contactNormalize = filter.filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactNormalize)
  );
};

export const ContactLst = () => {
  const constacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  const visibleName = getVisibleName(constacts, filter);

  return (
    <List>
      {visibleName.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <BtnDelete
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
            >
              Delete
            </BtnDelete>
          </ListItem>
        );
      })}
    </List>
  );
};
