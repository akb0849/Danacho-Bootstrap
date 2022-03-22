import * as React from 'react';

import Modal from '@mui/material/Modal';
import { ButtonContainer, ButtonTitle, ConnectButton, ConnectWalletButton, MainContainer, Logo} from './modalElements';
import MetamaskLogo from '../../assets/metamask.png'
import WalletConnectLogo from '../../assets/wallet.png'

export default function ConnectWallet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ConnectWalletButton onClick={handleOpen}>Connect Wallet</ConnectWalletButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainContainer>
          <ButtonContainer>
            <ConnectButton>
              <Logo src={MetamaskLogo} alt="" />
              <ButtonTitle>Metamask</ButtonTitle>
            </ConnectButton>
            <ConnectButton>
              <Logo src={WalletConnectLogo} alt="" />
              <ButtonTitle>Wallet Connect</ButtonTitle>
            </ConnectButton>
          </ButtonContainer>
        </MainContainer>
      </Modal>
    </div>
  );
}