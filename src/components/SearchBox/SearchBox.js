import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './SearchBox.module.css';

export default function SearchBox({ handleSubmit , handleChange, params}) {
  return (
    <form className={s.searchForm} autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        value={params}
        id="standard-search"
        label="Movie name"
        type="search"
        variant="standard"
      />
      <Button sx={{marginLeft: '10px'}} variant="text" type="submit">
        Search
      </Button>
    </form>
  );
}
