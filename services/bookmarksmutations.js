import { gql } from "@apollo/client";

const ADD_BOOKMARK = gql`
  mutation createBookmark(
    $title: String!
    $description: String!
    $link: String!
    $category: String!
  ) {
    createBookmark(title: $title, description: $description, link: $link, category: $category) {
      id
      title
      description
      link
      category
    }
  }
`;

const DELETE_BOOKMARK = gql`
  mutation deleteBookmark($id: Int!) {
    deleteBookmark(id: $id) {
      id
      title
      description
      link
      category
    }
  }
`;
const UPDATE_BOOKMARK = gql`
  mutation updateBookmark(
    $id: Int!
    $title: String!
    $description: String!
    $link: String!
    $category: String!
  ) {
    updateBook(id: $id, title: $title, description: $description, link: $link, category: $category) {
      id
      title
      description
      link
      category
    }
  }
`;

export { ADD_BOOKMARK, UPDATE_BOOKMARK, DELETE_BOOKMARK };
