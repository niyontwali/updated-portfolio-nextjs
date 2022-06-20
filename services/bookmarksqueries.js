import { gql } from "@apollo/client";

const GET_BOOKMARKS = gql`
  query getBookmarks {
    allBookmarks {
      id
      title
      description
      link
      category
    }
  }
`;

const GET_BOOKMARKS_BY_CATEGORY = gql`
  query allBookmarks($category: String!) {
    allBookmarks(filter: $category ) {
      id
      title
      description
      link
      category
    }
  }
`;

const GET_BOOKMARK = gql`
  query oneBookmark($id: Int!) {
    oneBookmark(id: $id) {
      id
      title
      description
      link
      category
    }
  }
`;

export { GET_BOOKMARKS, GET_BOOKMARK, GET_BOOKMARKS_BY_CATEGORY };
