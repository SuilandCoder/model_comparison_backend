import { Mongoose } from './mongoose.base';
import { UDXSchema } from './UDX-schema.class';
import * as mongoose from 'mongoose';
import { ResourceSrc } from './resource.enum';

class GeoDataDB extends Mongoose {
    constructor() {
        const collectionName = 'Geo_Data';
        const schema = {
            filename: String,
            path: String,
            schema$: mongoose.SchemaTypes.Mixed,
            permission: String,
            userId: String,
            desc: String,
            src: Number
        };

        super(collectionName, schema);
    }
}

export const geoDataDB = new GeoDataDB();

export class GeoDataClass {
    _id: mongoose.Types.ObjectId;
    filename: string;
    path: string;
    schema$: UDXSchema;
    permission: string;
    userId: string;
    desc: string;
    src: ResourceSrc;
}