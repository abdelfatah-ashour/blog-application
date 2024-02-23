import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { setSearchResults } from "@/store/slices/blogsSlice";
import { setSearchValue } from "@/store/slices/searchSlice";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(setSearchResults(e.target.value));
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <>
      <Typography variant="titleSmall" component="label">
        Search
      </Typography>
      <Input value={search} onChange={handleSearch} placeholder="Search" />
    </>
  );
}
