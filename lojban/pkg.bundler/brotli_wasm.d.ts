/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} buf
* @returns {Uint8Array}
*/
export function decompress(buf: Uint8Array): Uint8Array;


type Options = {
    quality?: number
};

export function compress(buf: Uint8Array, options?: Options): Uint8Array;


