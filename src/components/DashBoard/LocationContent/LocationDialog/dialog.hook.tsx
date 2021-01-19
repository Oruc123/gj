import React from "react";

const useDialogHook = () => {
  const [isOpenDialog, setOpenDialog] = React.useState(false);
  const openDialog = React.useCallback(() => {
    setOpenDialog(true);
  }, [isOpenDialog]);
  const closeDialog = React.useCallback(() => {
    setOpenDialog(false);
  }, [isOpenDialog]);

  return { isOpenDialog, openDialog, closeDialog };
};

export default useDialogHook;
