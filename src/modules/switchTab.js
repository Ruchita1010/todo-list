import { loadCreateOptions } from './dom';

const switchTab = (e) => {
  const currentTab = e.target.classList[1];
  switch (currentTab) {
    case 'all':
      break;
    case 'today':
      break;
    case 'create-btn': {
      loadCreateOptions();
      break;
    }
    case 'week':
      break;
    case 'projects':
      break;
  }
};

export default switchTab;