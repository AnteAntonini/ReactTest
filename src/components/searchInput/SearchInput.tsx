import "./searchInput.css";
import { useEffect } from "react";

type TSearchInputParams = {
  placeholder?: string;
  message: string;
  onChange: any;
};

const SearchInput = ({
  placeholder,
  onChange,
  message,
}: TSearchInputParams) => {
  useEffect(() => {
    console.log(`${message} Search Input`);
  }, []);

  return (
    <div className="row">
      <input
        className="search"
        type="text"
        placeholder={placeholder ?? "Search..."}
        onChange={onChange}
        data-testid="search-input"
      />
    </div>
  );
};

export default SearchInput;
