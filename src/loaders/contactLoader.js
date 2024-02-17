import { getContact, getContacts } from "../contacts";

export const getContactsLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

export const getContactLoader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};
