import React, { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/joy/Modal";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";

type Props = {
  layout: any;
  setLayout: (open: any) => void;
  activeItem: any;
  component: any;
  setRoute?: (route: string) => void;
  id: string;
};

const CommentModel: FC<Props> = ({
  layout,
  setLayout,
  setRoute,
  component: Component,
  id,
}) => {
  return (
    <>
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
      >
        <ModalDialog layout={layout}>
          <ModalClose />
          <DialogTitle>Comments</DialogTitle>
          <Component setRoute={setRoute} id={id} />
        </ModalDialog>
      </Modal>
    </>
  );
};

export default CommentModel;
