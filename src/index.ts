
/* IMPORT */

import * as pullPlugin from 'autogit-plugin-pull';

/* PULL */

type options = {
  remote: string,
  branch: string
};

function pull ( customOptions?: Partial<options> ) {

  return {
    description: 'Pull from the remote',
    plugins: [
      pullPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export = Object.assign ( pull, { default: pull } );
