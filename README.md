# Colosl Code Challenge

## List of Changes

In the RandomContacts.ts file I opted for creating an array of ten names for testing randomness. Depending on how robust the testing needed, this could have been populated by an api getting a larger selection of random names or read from a database table or file to add more names. I chose the basic solution for this simple test.

ContactsTable.tsx I created a new component ContactsItem.tsx  just to break down the components for reusability and structure.

ContactsTableSpec.tsx I modified the last test “removes all contacts when "Remove" button is clicked” as the table rows expected after the contacts are removed should be 1 which is the header row. I could have modified the test so it only retrieve the dynamic contact details rows in the TBody and tested that that was zero, indicating that all rows had been deleted.


Avatar.tsx – changed the hardcoded initials to the initials of the name passed in.

Button.spec.tsx – Tests 'applies the size class when size is provided' and 'applies the outline class when outline is true' were both testing for a specific text (eg. “lg”) in the className. When the CSS is compiled, classes in the module.css are given unique identifiers so they don’t clash with duplicate css class names in other modules. I changed the test to check that it includes the text in the generated class name instead of the text being the actual class name.


## Setup Instructions

Here's how to get started with this project:

```bash
git clone https://github.com/Praxidike6/colosl-js-code-test-pass.git
cd colosl-js-code-test-pass
npm install
npm run test
```
