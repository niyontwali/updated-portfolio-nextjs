import { gql } from "@apollo/client";

const GET_LEARNINGS = gql`
  query getLearnings {
    allLearnings {
      id
      title
      excerpt
      content
      category
      date
    }
  }
`;

const GET_LEARNINGS_BY_CATEGORY = gql`
  query allLearnings($category: String!) {
    allLearnings(filter: $category ) {
      id
      title
      excerpt
      content
      category
      date
    }
  }
`;

const GET_LEARNING = gql`
  query oneLearning($id: Int!) {
    oneLearning(id: $id) {
      id
      title
      excerpt
      content
      category
      date
    }
  }
`;

export { GET_LEARNINGS, GET_LEARNING, GET_LEARNINGS_BY_CATEGORY };
