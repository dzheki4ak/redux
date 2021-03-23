export const FLIPPAGEFWD = 'USERS/FLIP_PAGE_FWD';
export const FLIPPAGEBCK = 'USERS/FLIP_PAGE_BCK';

export const userPageFwd = () => {
  return {
    type: FLIPPAGEFWD,
  };
};

export const userPageBck = () => {
  return {
    type: FLIPPAGEBCK,
  };
};
