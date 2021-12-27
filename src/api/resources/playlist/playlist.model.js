import mongoose from 'mongoose';

const { Schema } = mongoose;
const playlistShema = new Schema({
    name: {
        type: String,
        required: [true, 'playlist must have name'],
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song',
            required: true
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
export default mongoose.model('Playlist', playlistShema);
