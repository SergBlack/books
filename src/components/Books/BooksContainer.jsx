import Books from "./Books";
import { connect } from "react-redux";

const mapPropsToState = state => {
  return {
    books: state.booksPage.books
  };
};

const mapDispatchToState = dispatch => {
  return {};
};

const BooksContainer = connect(mapPropsToState, mapDispatchToState)(Books);

export default BooksContainer;
