import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { TextField, Popover, MenuItem, MenuList, Box } from '@mui/material';
import LeftMenu from "../components/LeftMenu";

export default function Account() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  // const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/account/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      // navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
   <>
   <LeftMenu/>
     <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Add Accounting</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="Date"
          placeholder="Choose Date"
          className="border p-3 rounded-lg"
          id="date"
          onChange={handleChange}
        />
         <div>
      <TextField
        type="text"
        placeholder="Choose Head"
        variant="outlined"
        onClick={handleClick}
        value={selectedOption}
        fullWidth
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <MenuList>
            <MenuItem onClick={() => handleMenuItemClick('Debit')}>Debit</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Credit')}>Credit</MenuItem>
          </MenuList>
          <TextField
            type="text"
            placeholder="Type here..."
            variant="outlined"
            value={textValue}
            onChange={handleTextChange}
            fullWidth
            margin="normal"
          />
        </Box>
      </Popover>
    </div>
         <input
          type="text"
          placeholder="Account Type"
          className="border p-3 rounded-lg"
          id="actype"
          onChange={handleChange}
        />
       

        <input
          type="text"
          placeholder="Choose Head"
          className="border p-3 rounded-lg"
          id="head"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Amount"
          className="border p-3 rounded-lg"
          id="amount"
          onChange={handleChange}
        />
       
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 "
        >
          {loading ? "Loading..." : "Add Accounting"}
        </button>
      </form>
     
    </div>
   </>
  );
}
