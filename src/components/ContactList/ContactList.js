import { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/ContactForm/ContactForm-actions';

class ContactList extends Component {
  render() {
    const { contactsList, onDeleteContact } = this.props;
    return (
      <ul>
        {contactsList.map(({ name, number, id }) => {
          return (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              id={id}
              onDeleteContact={onDeleteContact}
              className={styles.contactList}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

const getContactsToShow = ({ filter, items }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name ? name.toLowerCase().includes(normalizedFilter) : false,
  );
};

const mapStateToProps = state => ({
  contactsList: getContactsToShow(state.contacts),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
