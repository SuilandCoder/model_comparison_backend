/**
 * 比较方案只是比较对象的集合
 */

import { Mongoose } from './mongoose.base';
import * as mongoose from 'mongoose';

import { CmpObj } from './cmp-obj.class';

class CmpSolutionDB extends Mongoose {
    constructor() {
        const collectionName = 'CmpSolution';
        const schema = {
            meta: String,
            cfg: String
        };

        super(collectionName, schema);
    }
}

export const cmpSolutionDB = new CmpSolutionDB();

export class CmpSolution {
    _id?: mongoose.Schema.Types.ObjectId;
    meta: {
        name: string,
        desc: string,
        time: string,
        author: string
    };
    cfg: {
        cmpObjs: Array<CmpObj>,
        keynote: {
            direction: 'x'|'y',
            dimension: 'point'|'polygon'
        }
    };
}