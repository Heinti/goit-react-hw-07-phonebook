// import PropTypes from 'prop-types';
// import css from '../ContactList/ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts, getFilterDataValue } from 'components/redux/selectors';
import { deleteContact } from '../redux/operators';

export const ContactList = () => {

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterDataValue);

  const getvisibleContacts = () => {
    const toLowerCaseName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseName)
    );
  };


  const deleteContactFormData = dataId => {
    dispatch(deleteContact(dataId));
  };

  const visibleContacts = getvisibleContacts();
  return (
    <section>
      <ul>
        {visibleContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            data={{ id, name, phone }}
            onDelete={deleteContactFormData}
          />
        ))}
      </ul>
    </section>
  );
};
