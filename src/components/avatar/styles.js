import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export default StyleSheet.create({
  deleteIcon: {
    position: 'absolute',
    right: 0,
  },
  root: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    borderColor: colors.purple,
  },
  status: {
    position: 'absolute',
    borderRadius: 1000,
  },
  remove: {
    position: 'absolute',
    borderRadius: 1000,
  },
});

export const modifiers = {
  small: {
    image: {
      width: 60,
      height: 60,
    },
    status: {
      height: 14,
      width: 14,
      left: 4,
    },
    delete: {
      height: 16,
      width: 16,
    },
  },
  medium: {
    image: {
      width: 80,
      height: 80,
    },
    status: {
      height: 20,
      width: 20,
      left: 5,
    },
    delete: {
      height: 20,
      width: 20,
    },
  },
  large: {
    image: {
      width: 100,
      height: 100,
    },
    status: {
      height: 22,
      width: 22,
      left: 8,
    },
    delete: {
      height: 22,
      width: 22,
    },
  },

  rounded: {
    root: {
      borderRadius: 10000,
    },
    image: {
      borderRadius: 10000,
    },
  },

  border: {
    small: {
      root: {
        padding: 2,
        borderWidth: 1,
      },
    },
    medium: {
      root: {
        padding: 3,
        borderWidth: 2,
      },
    },
    large: {
      root: {
        padding: 4,
        borderWidth: 3,
      },
    },
  },

  online: {
    status: {
      backgroundColor: colors.green,
    },
  },

  offline: {
    status: {
      backgroundColor: colors.gray,
    },
  },
  deleteMode: {
    deleteIcon: {},
  },
};
