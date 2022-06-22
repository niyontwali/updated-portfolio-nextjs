import { gql } from "@apollo/client";

const ADD_LEARNING = gql`
  mutation createLearning(
    $title: String!
    $excerpt: String!
    $content: String!
    $category: String!
    $date: String!
  ) {
    createLearning(
      title: $title
      excerpt: $excerpt
      content: $content
      category: $category
      date: $date
    ) {
      id
      title
      excerpt
      content
      category
      date
    }
  }
`;

const DELETE_LEARNING = gql`
  mutation deleteLearning($id: Int!) {
    deleteLearning(id: $id) {
      id
      title
      excerpt
      content
      category
      date
    }
  }
`;
const UPDATE_LEARNING = gql`
  mutation updateLearning(
    $id: Int!
    $title: String!
    $excerpt: String!
    $content: String!
    $category: String!
    $date: String!
  ) {
    updateLearning(
      id: $id
      title: $title
      excerpt: $excerpt
      content: $content
      category: $category
      date: $date
    ) {
      id
      title
      content
      category
      date
    }
  }
`;

export { ADD_LEARNING, UPDATE_LEARNING, DELETE_LEARNING };
