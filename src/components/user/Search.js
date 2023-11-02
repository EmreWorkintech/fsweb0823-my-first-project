import { Input, InputGroup, InputGroupText } from "reactstrap";

function Search({ search, handleChange }) {
  return (
    <div className="d-flex justify-content-center">
    <InputGroup className="w-25">
      <InputGroupText>@</InputGroupText>
      <Input
        placeholder="Search"
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
      />
    </InputGroup>
    </div>
  );
}

export default Search;
