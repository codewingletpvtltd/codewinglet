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
        const temp = anchorObj.left + menu.offsetWidth;
        menuLeft =
          temp > screenWidth
            ? screenWidth - menu.offsetWidth + 10
            : anchorObj.left;
      }
    }
  }

  return {
    top: anchorObj?.top || 25,
    _anchorPosition: { left: _anchorLeft ? `${_anchorLeft}px` : '11%' },
    menuPosition: { left: `${menuLeft - 20}px` },
  };
};
