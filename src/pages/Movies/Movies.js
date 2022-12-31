import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Movies() {
  return (
    <form>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
      <Button sx={{margin: '13px 0 0 10px'}} variant="text">Search</Button>
    </form>
  );
}
