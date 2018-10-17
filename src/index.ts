
/* IMPORT */

import * as pullPlugin from 'autogit-plugin-pull';

/* PULL */

type options = {
  remote: string,
  branch: string
};

function pull ( customOptions?: Partial<options> ) {

  return {
    description: 'A command for pulling from a remote.',
    plugins: [
      pullPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export = Object.assign ( pull, { default: pull } );
