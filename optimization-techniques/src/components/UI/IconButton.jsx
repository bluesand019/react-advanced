import { log } from '../../log.js';
import { memo } from 'react';

//the IconButton component is getting re-executed everytime I'm incrementing
//or decrementing. Thus, we can wrap this with memo to prevent re-executing IconButton and its
//child components Icon, PlusIcon, MinusIcon
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
})

export default IconButton;