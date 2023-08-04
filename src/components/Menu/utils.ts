export const getAnchorPosition = (
  anchorEle: HTMLElement | null | undefined
) => {
  const anchorObj = anchorEle?.getBoundingClientRect();
  let menu,
    screenWidth,
    _anchorLeft = 0,
    menuLeft = 0;

  if (typeof window !== 'undefined') {
    menu = document.getElementById('menu-container');
    screenWidth = screen.width;

    const menuObj = menu && menu.getBoundingClientRect();

    if (anchorObj && menuObj) {
      _anchorLeft = anchorObj
        ? Math.round(anchorObj.left + anchorObj.width / 2)
        : 0;

      if (menu) {
        const leftTemp = anchorObj.left - menu.offsetWidth / 2;

        if (leftTemp < 0) {
          menuLeft = 10;
        } else if (leftTemp + menu.offsetWidth > screenWidth) {
          menuLeft = screenWidth - menu.offsetWidth - 10;
        } else if (leftTemp >= 0) {
          menuLeft = leftTemp;
        }
      }
    }
  }

  return {
    top: anchorObj?.bottom || -25,
    _anchorPosition: { left: _anchorLeft ? `${_anchorLeft}px` : '11%' },
    menuContainerPosition: { left: `${menuLeft}px` },
  };
};
