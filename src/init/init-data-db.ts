import { geoDataDB, GeoDataClass } from '../models/UDX-data.model';
import * as Bluebird from 'bluebird';
const debug = require('debug');
const initDebug = debug('WebNJGIS: Init');
import * as mongoose from 'mongoose';

const initData = (data: GeoDataClass): Bluebird<any> => {
    return new Bluebird((resolve, reject) => {
        geoDataDB.find(data._id)
            .then(docs => {
                if (docs.length >= 1) {
                    initDebug('Init data succeed!' + data._id);
                    return resolve();
                } else {
                    geoDataDB.insert(data)
                        .then(rst => {
                            initDebug('Init data succeed!' + data._id);
                            return resolve();
                        })
                        .catch(err => {
                            initDebug(err);
                            return reject(err);
                        });
                }
            })
            .catch(err => {
                initDebug(err);
                return reject(err);
            });
    });
};


// const datas = [
//     {
//         _id?: mongoose.Types.ObjectId(),
//         gdid: '',
//         filename: '',
//         path: '',
//         permission: 'public',
//         userId: 'Admin'
//     }
// ];

// Bluebird.all()