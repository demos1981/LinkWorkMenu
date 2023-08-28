import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkDataSchema = new Schema({
    title:'string',
    url:'string',
});

const Link = mongoose.model('link', LinkDataSchema);

export default Link;
