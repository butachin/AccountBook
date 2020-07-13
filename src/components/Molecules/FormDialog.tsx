import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "../Atoms/Button";
import { useDispatch } from "react-redux";
import { addItems } from "../../actions/Items/ActionCreator";

const FormDialog: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [Items, setItems] = React.useState({ day: "", bought: "", price: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeDay = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItems({ ...Items, day: e.currentTarget.value });
  };

  const handleChangeBought = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItems({ ...Items, bought: e.currentTarget.value });
  };

  const handleChangePrice = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItems({ ...Items, price: e.currentTarget.value });
  };

  const handleClickAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(addItems(Items));
    setOpen(false);
  };

  return (
    <div>
      <Button label="項目追加" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">新しいアイテム</DialogTitle>
        <DialogContent>
          <DialogContentText>
            各項目を入力して追加を押してください．
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="日にち"
            type="email"
            fullWidth
            value={Items.day}
            onChange={handleChangeDay}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="買ったもの"
            type="bought"
            fullWidth
            value={Items.bought}
            onChange={handleChangeBought}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="合計金額"
            type="price"
            fullWidth
            value={Items.price}
            onChange={handleChangePrice}
          />
        </DialogContent>
        <DialogActions>
          <Button label="追加" onClick={handleClickAddItem} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
